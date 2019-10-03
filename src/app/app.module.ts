import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserPrefComponent } from './userpref/userpref.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UserPrefComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
