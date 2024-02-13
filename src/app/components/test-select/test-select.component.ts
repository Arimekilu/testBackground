import {ChangeDetectorRef, Component, forwardRef, Input, OnInit} from '@angular/core';
import {IControl} from "../../interfaces/interfaces";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {DataService} from "../../data-service.service";

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
export class TestSelectComponent implements OnInit, ControlValueAccessor{
  @Input()control?: IControl
  showOptions: boolean = false
  selectedValue: string  = ''
  value = this.selectedValue
  ngOnInit(): void {
    if (typeof this.control?.value === 'string' ) {
      this.selectedValue = this.control.value
      this.writeValue(this.selectedValue)
    }
  }


  constructor(private readonly changeDetector: ChangeDetectorRef, private dataService: DataService) {
  }

  private onChange = (value: any) => {
  };
  private onTouched = () => {
  }


  updateValue(insideValue: string) {
    const value= insideValue
    this.value = insideValue; // html
    this.onChange(value); // уведомить Forms API
    this.onTouched();

  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    if (value) {
      this.value = this.selectedValue
      console.log(this.value)
    }
    this.changeDetector.detectChanges()
  }







}
