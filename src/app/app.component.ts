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
    // valueArr?: string[]
}
}
