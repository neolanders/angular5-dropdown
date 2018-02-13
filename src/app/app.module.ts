import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MoviesFilterModule } from './movies-filter/movies-filter.module';

import { AppComponent } from './app.component';

import {
  ApiService,
  SharedModule
} from './shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MoviesFilterModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
