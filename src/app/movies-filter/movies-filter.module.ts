import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesFilterComponent } from './movies-filter.component';
import { MoviesService } from '../shared/services';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [MoviesFilterComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  exports: [MoviesFilterComponent],
  providers: [MoviesService]
})
export class MoviesFilterModule { }
