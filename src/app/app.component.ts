import { Component } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  date: string = "";

  constructor(private service: PhotoService) {}

  newDateSearch($event: string) {
    this.date = $event;
    console.log(this.service.getPhotoInformation(this.date));
  }

}
