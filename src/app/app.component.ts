import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IControl} from "./interfaces/interfaces";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {numInputJSON} from "./jsonTest";
import {DataService} from "./data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'testBackground';
  dynamicForm: FormGroup;
  controls?: IControl[]
  checkControl?: IControl


  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.dynamicForm = this.fb.group({
    });
  }

  Control (obj: IControl ) {
    this.dynamicForm.addControl(
      obj.name,
      this.fb.control(obj.value)
    )
  }
  ControlNum (obj: IControl ) {
    this.dynamicForm.addControl(
      obj.name,
      this.fb.control(obj.value)
    )
  }

  ngOnInit(): void {
   this.controls = this.dataService.getData()
    this.checkControl = this.dataService.getCheckbox()
    for (let stringControlElement of this.controls) {
      if (stringControlElement.type === 'text') {
        this.Control(stringControlElement)
      } else if (stringControlElement.type === 'number') {
        this.ControlNum(stringControlElement)
      }
    }
  }

  test() {
    console.log(this.dynamicForm.value)
  }


}
