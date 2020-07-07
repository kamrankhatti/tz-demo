import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends HttpService {
  readonly BASE_URL = 'https://api.tzstats.com/tables/op';

  constructor(http: HttpClient) {
    super(http);
  }
}
