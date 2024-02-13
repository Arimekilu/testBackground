import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IControl} from "./interfaces/interfaces";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {DataService} from "./data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'testBackground';
  dynamicForm: FormGroup;
  controls?: IControl[]
  checkControl?: IControl


  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.dynamicForm = this.fb.group({});
  }

  ControlText(obj: IControl) {
    this.dynamicForm.addControl(
      obj.name,
      this.fb.control(obj.value)
    )
  }

  ControlNum(obj: IControl) {
    this.dynamicForm.addControl(
      obj.name,
      this.fb.control(obj.value)
    )
  }

  ControlCheck(obj: IControl) {
    const value = []
    if (obj.checkbox) {
      for (const objElement of obj.checkbox) {
        if (objElement.checked) {
          value.push(objElement.label)
        }
      }
    }
    this.dynamicForm.addControl(
      obj.name,
      this.fb.control(value)
    )
  }

  ControlSelect (obj: IControl) {
    this.dynamicForm.addControl(
      obj.name,
      this.fb.control(obj.value))
  }

  ngOnInit(): void {
    this.controls = this.dataService.getData()
    this.checkControl = this.dataService.getCheckbox()
    for (let control of this.controls) {
      if (control.type === 'text') {
        this.ControlText(control)
      } else if (control.type === 'number') {
        this.ControlNum(control)
      } else if (control.type === 'checkbox') {
        this.ControlCheck(control)
      } else if (control.type === 'select') {
        this.ControlSelect(control)
      }
    }
  }

  test() {
    console.log(this.dynamicForm.value)
  }

  submit($event: MouseEvent) {
    console.log(this.dynamicForm)

  }
}
