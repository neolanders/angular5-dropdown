import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    return new HttpHeaders(headersConfig);
  }

  private setApiKey(): HttpParams {
      let params = new HttpParams();
      params = params.append('api_key', environment.api_key.toString());
      return params;
  }

  formatErrors(err: any): any {
    return Observable.throw(err.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    const apiKeyParams = this.setApiKey();
    return this.http.get(`${environment.api_url}${path}`,
      { headers: this.setHeaders(), params: apiKeyParams }
    )
    .catch(this.formatErrors);
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors);
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors);
  }
}
