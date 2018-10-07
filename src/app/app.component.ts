import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public text;

  constructor() { }

  onKeyUp(keyUpEvent: KeyboardEvent) {
    console.log('TEXT: ', this.text);
  }
}
