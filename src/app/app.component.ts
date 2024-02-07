import { Component } from '@angular/core';
import {InputComponent} from "./interfaces/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testBackground';

  input: InputComponent =  {
  isArray: true,
  name: 'testName',
  label: 'testLabel',
    placeholder: 'testPleaceholder',
    // value?: string,
    valueArr: ['test', "test"]
}

  inputNoArr: InputComponent =  {
    isArray: false,
    name: 'noArrName',
    label: 'noArrLabel',
    placeholder: 'noArrPleaceholder',
    // value?: string,
    // valueArr?: string[]
  }


}
