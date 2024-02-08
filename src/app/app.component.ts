import {Component, OnInit} from '@angular/core';
import {InputComponent, numberInputComponent} from "./interfaces/interfaces";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {numInputJSON} from "./jsonTest";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'testBackground';

  input: InputComponent = {
    isArray: true,
    name: 'testName',
    label: 'testLabel',
    placeholder: 'testPleaceholder',
    // value?: string,
    valueArr: ['test', "test"]
  }

  inputNoArr: InputComponent = {
    isArray: false,
    name: 'noArrName',
    label: 'noArrLabel',
    placeholder: 'noArrPleaceholder',
    // value?: string,
    // valueArr?: string[]
  }

  testNum: numberInputComponent = {
    name: 'имечко',
    value: 42
  }


  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
    })

  }

  logData() {
    console.log(this.form.value)
  }

  Control (obj: numberInputComponent ) {
   // return  obj.name: new FormControl (obj.value)

  }

  ngOnInit(): void {
    console.log(numInputJSON)
    console.log(JSON.parse(numInputJSON))
    const newInput: numberInputComponent = JSON.parse(numInputJSON)


  }


}
