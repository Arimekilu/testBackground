import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IControl} from "./interfaces/iControl.interface";
import {FormBuilder, FormGroup} from "@angular/forms";

import {DataService} from "./data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'testBackground';
  dynamicForm: FormGroup;
  controls?: IControl[]

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.dynamicForm = this.fb.group({});
  }

  controlText(control: IControl) {
    this.dynamicForm.addControl(
      control.name,
      this.fb.control(control.value)
    )
    if (control.validators) {
      this.dynamicForm.controls[control.name].setValidators(control.validators)
    }
  }

  controlNum(control: IControl) {
    this.dynamicForm.addControl(
      control.name,
      this.fb.control(control.value)
    )
    if (control.validators) {
      this.dynamicForm.controls[control.name].setValidators(control.validators)
    }
  }

  controlCheck(control: IControl) {
    const value = []
    if (control.checkbox) {
      for (const objElement of control.checkbox) {
        if (objElement.checked) {
          value.push(objElement.label)
        }
      }
    }
    this.dynamicForm.addControl(
      control.name,
      this.fb.control(value)
    )
    if (control.validators) {
      this.dynamicForm.controls[control.name].setValidators(control.validators)
    }
  }

  controlSelect(control: IControl) {
    this.dynamicForm.addControl(
      control.name,
      this.fb.control(control.value))
    if (control.validators) {
      this.dynamicForm.controls[control.name].setValidators(control.validators)
    }
  }

  ngOnInit(): void {
    this.controls = this.dataService.getData()

    for (let control of this.controls) {
      if (control.type === 'text') {
        this.controlText(control)
      } else if (control.type === 'number') {
        this.controlNum(control)
      } else if (control.type === 'checkbox') {
        this.controlCheck(control)
      } else if (control.type === 'select') {
        this.controlSelect(control)
      }
    }
  }

  submit() {
    console.log(this.dynamicForm)
  }
}
