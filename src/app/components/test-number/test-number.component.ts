import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {numberInputComponent} from "../../interfaces/interfaces";

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TestNumberComponent),
    multi: true
  }]
})
export class TestNumberComponent implements ControlValueAccessor {
  @Input()numberInputComponent?: numberInputComponent
  @Input()
  set value(val) {
    this._value = val;
    this.onChange(this._value);
  }
  public name?: string = this.numberInputComponent?.name
  private _value: number = 0

  get value() {
    return this._value;
  }

  onChange(_: any) {}

  increment() {
    this.value++
  }
  decrement() {
    this.value--
  }
    registerOnChange(fn: any){
      console.log('registerOnChange', fn)
      this.onChange = fn;
    }


  registerOnTouched(fn: any): void {
    console.log('OnTouched', fn)
  }

  writeValue(value: number): void {
    if (this.numberInputComponent?.value) {
      this.value = this.numberInputComponent.value
    } else this.value = 0
  }
}
