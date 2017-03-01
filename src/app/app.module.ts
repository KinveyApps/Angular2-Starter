import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Kinvey } from 'kinvey-angular2-sdk';

import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ Kinvey ]
})
export class AppModule {}
