import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DateComponent } from './components/date/date.component';
import { PhotoViewComponent } from './components/photo-view/photo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    PhotoViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
