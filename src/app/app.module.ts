import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MultByPipe} from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    ExMarksPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
