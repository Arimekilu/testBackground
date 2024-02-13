import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {IControl} from "../../interfaces/interfaces";
import {DataService} from "../../data-service.service";

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent {
  @Input() control?: IControl
  value: any
  valueArr:Map<string, string> = new Map()

  test() {
    console.log()
  }

  constructor(private readonly changeDetector: ChangeDetectorRef, private dataService: DataService) {
  }

  private onChange = (value: any) => {
  };
  private onTouched = () => {
  }

  onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value: any = targetDivElement.value;
    this.updateValue(value)
    this.onChange(value);
  }


  updateValue(insideValue: any) {
    this.value = insideValue; // html
    this.onChange(insideValue); // уведомить Forms API
    this.onTouched();

  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.value = value
    this.changeDetector.detectChanges()
  }

  ngOnInit(): void {
    const box = this.dataService.getCheckbox()
    this.writeValue(box.checkbox)
    this.value = []
    if (box.checkbox)
      for (const box1 of box.checkbox) {
        if (box1.checked) {
          this.value.push(box1.label)
        }
      }
    console.log(this.value)
  }
}
