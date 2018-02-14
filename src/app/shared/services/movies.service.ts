import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService {

  constructor(
    private apiService: ApiService
  ) {}

    // Get popular movies list
    getPopular(): Observable<Array<Movie>> {
      return this.apiService
      .get('/popular')
      .pipe(map(data => data.results));
    }

}
