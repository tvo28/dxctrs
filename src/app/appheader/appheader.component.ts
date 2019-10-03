import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './appheader.component.html',
  styleUrls: [ './appheader.component.css' ]
})
export class AppHeaderComponent  {
  @Input() name: string;
}
