import { getTestBed, inject, TestBed, async } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { MoviesService } from './movies.service';

describe('ApiService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        HttpClient,
        MoviesService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  beforeEach(() => {
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', inject([ApiService, HttpClient], (service: ApiService) => {
    expect(service)
    .toBeTruthy();
  }));

  describe('#get', () => {
    it('should return execute a GET Api Request', async( inject([MoviesService], (service: MoviesService) => {
      // Simulate Query getPopular to test httpMock for GET
      service.getPopular()
              .toPromise().then((movies) => {         
                expect(movies.length).toBeGreaterThan(0);
              });       

      const req = httpMock.expectOne(`${environment.api_url}/popular?api_key=${environment.api_key}`);
      expect(req.request.method)
        .toBe('GET');
    })));
  });

});
