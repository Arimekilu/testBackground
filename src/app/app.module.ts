import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestInputComponent } from './components/test-input/test-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TestNumberComponent } from './components/test-number/test-number.component';
import { TestSelectComponent } from './components/test-select/test-select.component';

@NgModule({
  declarations: [
    AppComponent,
    TestInputComponent,
    TestNumberComponent,
    TestSelectComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
