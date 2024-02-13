import {ChangeDetectorRef, Component, forwardRef, Input, OnInit} from '@angular/core';
import {IControl} from "../../interfaces/iControl.interface";
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
  public value: string | string[] = ''
  constructor(private readonly changeDetector: ChangeDetectorRef) {
  }
  private onChange = (value: any) => {
  };
  private onTouched = () => {
  }
  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value: string | string[] = targetDivElement.value;
    this.updateValue(value)
    this.onChange(value);
  }
  public updateValue(insideValue: string | string[]) {
    this.value = insideValue; // html
    this.onChange(insideValue); // уведомить Forms API
    this.onTouched();
  }
  public registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public writeValue(value: string | string[]): void {
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
  public addNewValue() {
    if (this.control && Array.isArray(this.control.value) && this.value !== '') {
      if (typeof this.value === "string") {
        this.control.value ? this.control.value.push(this.value) : this.control.value = [this.value]
      }
      this.updateValue(this.control.value)
      this.value = ''
    }
  }
  public deleteValue() {
    if (Array.isArray(this.control?.value) && this.control?.value) {
      this.control.value.splice(this.control.value.length - 1, 1)
    }
  }

  protected readonly Array = Array;
}
