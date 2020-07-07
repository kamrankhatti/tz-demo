import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(public http: HttpClient) {}

  get(url: string, params?: HttpParams) {
    return this.http.get(url, { params }).pipe(catchError((err) => throwError(err)));
  }
}
