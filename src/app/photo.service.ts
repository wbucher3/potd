import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private _jsonURL = 'assets/photo-data.json';
  private photoData: any;

  constructor(private http: HttpClient) {
    this.http.get(this._jsonURL).subscribe((data) => {
      this.photoData = data;
    })
  }

  getPhotoInformation(key: string) {
    console.log("Searching for: " + key)
    return this.photoData[key];
  }

  
}
