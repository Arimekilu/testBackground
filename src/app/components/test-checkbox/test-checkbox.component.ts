import {ChangeDetectorRef, Component, forwardRef, Input, OnInit} from '@angular/core';
import {IControl} from "../../interfaces/interfaces";
import {DataService} from "../../data-service.service";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TestCheckboxComponent),
    multi: true
  }]
})
export class TestCheckboxComponent implements ControlValueAccessor, OnInit {
  @Input() control?: IControl
  value: string[] = []
  valueArr: Set<string> = new Set()


  constructor(private readonly changeDetector: ChangeDetectorRef, private dataService: DataService) {
  }

  private onChange = (value: any) => {
  };
  private onTouched = () => {
  }

  onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value: any = targetDivElement.value;
    console.log(targetDivElement)
    console.log(this.valueArr)
    if (targetDivElement.checked){
      this.valueArr.add(value)
    } else if (!targetDivElement.checked) {
      this.valueArr.delete(value)
    }
    this.updateValue(this.valueArr)
    this.onChange([...this.valueArr]);
    console.log(this.valueArr)
  }


  updateValue(insideValue: Set<string>) {
    const value= [...insideValue]
    this.value = value; // html
    this.onChange(value); // уведомить Forms API
    this.onTouched();

  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: Set<string>): void {
    if (value) {
      console.log('writeValue')
      console.log(value)
      this.value = [...value]
      console.log(this.value)
    }
    this.changeDetector.detectChanges()
  }

  ngOnInit(): void {
    const box = this.dataService.getCheckbox()
    if (box.checkbox)
      for (const box1 of box.checkbox) {
        if (box1.checked) {
          this.valueArr.add(box1.label)
        }
      }
    console.log('Oninit')
    this.writeValue(this.valueArr)
    this.updateValue(this.valueArr)
  }

  selectAll(event: Event) {
    const targetDivElement = event.target as HTMLInputElement;
    const checked = targetDivElement.checked
    if (this.control?.checkbox) {
      for (const select of this.control?.checkbox) {
        select.checked = checked;
        checked ? this.valueArr.add(select.label) : this.valueArr.delete(select.label)
      }
    }
    this.updateValue(this.valueArr)
  }
}
