import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {InputComponent} from "../../interfaces/interfaces";
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
  @Input() InputComponent?: InputComponent
  inputComp?: InputComponent
  inputValue: string = ''

  get value() {
    return this.inputValue;
  }

  set value(val: any) {
    this.inputValue = val
    this.registerOnChange(val)
  }

  constructor() {
    console.log(this.InputComponent)
    if (this.InputComponent) {
      this.inputComp = this.InputComponent
    }
  }

  ngOnInit(): void {
    console.log(this.InputComponent)
    this.inputComp = this.InputComponent
  }


  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: string | string[]): void {
    if (this.inputComp) {
      if (Array.isArray(obj)) {
        this.inputComp.valueArr = obj
      } else this.inputComp.value = obj
    }
  }


  addNewValue() {
    if (this.inputComp && this.inputComp.isArray && this.value !== '') {
      this.inputComp.valueArr ? this.inputComp.valueArr.push(this.value) : this.inputComp.valueArr = [this.value]
      this.inputValue = ''
    }
  }


  setDisabledState(isDisabled: boolean): void {
  }
}
