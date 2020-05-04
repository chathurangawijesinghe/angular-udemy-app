import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'assignment6';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  @ViewChild('form') form: NgForm;

  onSubmit() {
    console.log(this.form);
  }
}
