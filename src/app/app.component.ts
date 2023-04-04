import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  date: string = "";

  newDateSearch($event: string) {
    this.date = $event;
    console.log(this.date)
  }

}
