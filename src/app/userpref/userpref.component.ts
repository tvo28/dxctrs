import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-pref',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class UserPrefComponent  {
  //@Input() name: string;
}
