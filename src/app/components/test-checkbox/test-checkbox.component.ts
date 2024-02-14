import {ChangeDetectorRef, Component, forwardRef, Input, OnInit} from '@angular/core';
import {IControl} from "../../interfaces/iControl.interface";
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
  public value: string[] = []
  public valueArr: Set<string> = new Set()
  constructor(private readonly changeDetector: ChangeDetectorRef) {
  }
  private onChange = (value: string[]) => {
  };
  private onTouched = () => {
  }
  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value: string = targetDivElement.value;
    if (targetDivElement.checked) {
      this.valueArr.add(value)
    } else if (!targetDivElement.checked) {
      this.valueArr.delete(value)
    }
    this.updateValue(this.valueArr)
    this.onChange([...this.valueArr]);
  }
  private updateValue(insideValue: Set<string>) {
    const value = [...insideValue]
    this.value = value; // html
    this.onChange(value); // уведомить Forms API
    this.onTouched();
  }
  public registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public writeValue(value: Set<string>): void {
    if (value) {
      this.value = [...value]
    }
    this.changeDetector.detectChanges()
  }
  ngOnInit(): void {
    if (this.control?.checkbox) {
      const checkboxArr = this.control.checkbox
      for (const box of checkboxArr) {
        if (box.checked) {
          this.valueArr.add(box.label)
        }
      }
      this.writeValue(this.valueArr)
      this.updateValue(this.valueArr)
    }
  }
  public selectAll(event: Event) {
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
