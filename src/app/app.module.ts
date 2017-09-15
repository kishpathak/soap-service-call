import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { ServiceCallComponent } from './service-call/service-call.component';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ServiceCallComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
