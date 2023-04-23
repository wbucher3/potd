import { Component } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  date: string = "";
  currentPhoto: any;
  currentDate: Date = new Date();

  constructor(private service: PhotoService) {}

  newDateSearch($event: string) {
    this.date = $event;
    this.currentPhoto = this.service.getPhotoInformation(this.date);
    // console.log(this.currentPhoto);
  }

}
