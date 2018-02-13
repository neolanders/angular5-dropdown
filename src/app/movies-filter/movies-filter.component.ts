import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/services/movies.service';
import { Movie } from '../shared/models/movie.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.scss']
})
export class MoviesFilterComponent implements OnInit {

  movies: Observable<Array<Movie>>;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movies = this.movieService.getPopular();
  }

}
