import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        HttpClient
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

});
