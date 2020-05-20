import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';
  isDisplay = false;
  items: number[] = [];
  counter = 0;

  onDisplayDetails() {
    this.isDisplay = !this.isDisplay;
    this.counter++;
    this.items.push(this.counter);
  }
}
