import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TimeComponent } from './time.component';

import { TimeInputModule } from 'angular2-material-time-input';


@NgModule({
  declarations: [
    AppComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TimeInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
