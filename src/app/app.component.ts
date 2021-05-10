import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  public items = [];

  public newTask;

  addToList() {
    this.items.push(this.newTask);
    this.newTask = '';
  }

  deleteFromList(index: any) {
    this.items.splice(index, 1);
  }
}
