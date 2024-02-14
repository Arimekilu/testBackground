import {ChangeDetectorRef, Component, forwardRef, Inject, Injector, INJECTOR, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";
import {IControl} from "../../interfaces/iControl.interface";

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
export class TestNumberComponent implements ControlValueAccessor, OnInit {
  @Input() control?: IControl
  public value = 0
  _control?: NgControl;
  constructor(private readonly changeDetector: ChangeDetectorRef, @Inject(INJECTOR) private injector: Injector) {
  }
  private onChange = (value: any) => {};
  private onTouched = () => {}
  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = +targetDivElement.value;
    this.value = value
    this.onChange(value);
  }
  public increment() {
      this.updateValue(++this.value)
  }
  public decrement() {
     this.updateValue(--this.value)
  }
  private updateValue(insideValue: number) {
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
  public writeValue(value: number): void {
    this.value = value
    this.changeDetector.detectChanges()
  }
  ngOnInit(): void {
    this._control = this.injector.get(NgControl);
    if (this.control?.value && typeof this.control.value === "number") {
      this.writeValue(this.control.value)
    } else this.writeValue(0)
  }
}
