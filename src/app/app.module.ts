import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserPrefComponent } from './userpref/userpref.component';

const appRoutes: Routes = [
  { path: 'user-pref', component: UserPrefComponent },
  { path: '', redirectTo: '/user-pref', pathMatch: 'full'}
];

@NgModule({
  imports:      [ 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule, FormsModule ],
  declarations: [ AppComponent, UserPrefComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
