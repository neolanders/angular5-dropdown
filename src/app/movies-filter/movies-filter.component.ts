import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/services/movies.service';
import { Movie } from '../shared/models/movie';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.scss']
})
export class MoviesFilterComponent implements OnInit {
  status: {
    selected: boolean,
    isopen: boolean
  } = {
    selected: false,
    isopen: false
  };
  movies: Observable<Array<Movie>>;
  selectedMovieTitle: string;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movies = this.movieService.getPopular();
  }

  select(movie: Movie): void {
    this.selectedMovieTitle = movie.title;
    this.status.selected = true;
    this.status.isopen = !this.status.isopen;
  }

  clear(): void {
    this.selectedMovieTitle = '';
    this.status.selected = false;
  }
}
