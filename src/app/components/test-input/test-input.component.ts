import {ChangeDetectorRef, Component, forwardRef, Input, OnInit} from '@angular/core';
import {IControl} from "../../interfaces/interfaces";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";



@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TestInputComponent),
    multi: true
  }]
})
export class TestInputComponent implements OnInit, ControlValueAccessor {
  @Input() control?: IControl
  value: string | string[] = ''
  outputValue = ''
  constructor(private readonly changeDetector: ChangeDetectorRef) {
  }
  private onChange = (value: any) => {};
  private onTouched = () => {}
  onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value: string | string[] = targetDivElement.value;
    this.updateValue(value)
    this.onChange(value);
  }


  updateValue(insideValue: string | string[]) {
    this.value = insideValue; // html
    this.onChange(insideValue); // уведомить Forms API
    this.onTouched();
    console.log('update',this.value)
  }
  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  writeValue(value: string | string[]): void {
    if (typeof value === 'string') {
      this.value = value
    }
    this.changeDetector.detectChanges()
  }

  ngOnInit(): void {
    if (this.control?.value && typeof this.control.value === "string") {
      this.writeValue(this.control.value)
    } else this.writeValue('')
  }



  addNewValue() {
    if (this.control && Array.isArray(this.control.value) && this.value !== '') {
      if (typeof this.value === "string") {
        this.control.value ? this.control.value.push(this.value) : this.control.value = [this.value]
      }
      this.updateValue(this.control.value)
      this.value = ''
    }
  }

  deleteValue() {
    if (Array.isArray(this.control?.value) && this.control?.value) {
      this.control.value.splice(this.control.value.length - 1, 1)
    }
  }


  protected readonly Array = Array;
}
