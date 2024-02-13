import {ChangeDetectorRef, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {IControl} from "../../interfaces/interfaces";

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
  constructor(private readonly changeDetector: ChangeDetectorRef) {
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
    console.log('update',this.value)
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
    if (this.control?.value && typeof this.control.value === "number") {
      this.writeValue(this.control.value)
    } else this.writeValue(0)
  }
}
