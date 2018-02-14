import { TestBed, inject, async } from '@angular/core/testing';
import { ApiService } from './api.service';
import { MoviesService } from './movies.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Movie } from '../models/movie';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

describe('MoviesService', () => {
  const httpMock: HttpTestingController = undefined;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        MoviesService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getPopular', () => {
    it('should return an a none empty response', async( inject([MoviesService], (service: MoviesService) => {
      service.getPopular()
          .toPromise().then((movies) => {         
            expect(movies.length).toBeGreaterThan(0);
          });   
    })));   

    it('should return an Observable<Array<Movie>>', async( inject([MoviesService], (service: MoviesService) => {
      const mockResponse = [
        { id: 0, title: 'Video 0' },
        { id: 1, title: 'Video 1' },
        { id: 2, title: 'Video 2' },
        { id: 3, title: 'Video 3' },
      ];
        
      // When the request subscribes for results on a connection, return a fake response
      service.getPopular().subscribe(movie => {
        JSON.stringify(mockResponse);
      });
    })));
  });
});
