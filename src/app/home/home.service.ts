import { HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

import { ApiService } from '../base/services';

export enum APIParams {
  'type' = 'transaction',
  'columns' = 'row_id,time,type,sender,volume',
  'receiver' = 'tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo',
}
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private api: ApiService) {}

  getAllStats(params: HttpParams) {
    const url = `${this.api.BASE_URL}`;
    return this.api.get(url, params).pipe(map((response) => this.parseResponse(response)));
  }

  parseResponse(data) {
    // ngrx/entity adopter use ID in object, parsing request to make as expected
    return data.map((item, index) => {
      return {
        id: index+1,
        date: item[1],
        address: item[3],
        type: 'Received',
        amount: '-1.0 XTZ'
      }
    })
  }
}
