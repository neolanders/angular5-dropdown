import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';


@Injectable()
export class MoviesService {

  constructor(
    private apiService: ApiService
  ) {}

    // Get popular movies list
    getPopular(): Observable<any> {
      return this.apiService
      .get('/popular');
      // .pipe(map(data => {
      //   return data.results;
      // }));
    }

}
