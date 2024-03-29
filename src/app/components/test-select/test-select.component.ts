import {ChangeDetectorRef, Component, forwardRef, Inject, Injector, INJECTOR, Input, OnInit} from '@angular/core';
import {IControl} from "../../interfaces/iControl.interface";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";


@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TestSelectComponent),
    multi: true
  }]
})
export class TestSelectComponent implements OnInit, ControlValueAccessor {
  @Input() control?: IControl
  public showOptions: boolean = false
  public selectedValue: string = ''
  public value = this.selectedValue
  _control?: NgControl;

  ngOnInit(): void {
    this._control = this.injector.get(NgControl);
    if (typeof this.control?.value === 'string') {
      this.selectedValue = this.control.value
      this.writeValue(this.selectedValue)
    }
  }

  constructor(private readonly changeDetector: ChangeDetectorRef, @Inject(INJECTOR) private injector: Injector) {
  }

  private onChange = (value: any) => {
  };
  private onTouched = () => {
  }

  public updateValue(insideValue: string) {
    const value = insideValue
    this.value = insideValue; // html
    this.onChange(value); // уведомить Forms API
    this.onTouched();
  }
  public registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public writeValue(value: string): void {
    if (value) {
      this.value = this.selectedValue
    }
    this.changeDetector.detectChanges()
  }
}
