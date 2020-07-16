import { catchError, debounceTime, map, mergeMap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

import * as fromActions from '../actions';
import { ITableData } from "../../shared/components/tz-table";
import { APIParams, HomeService } from "../../home/home.service";

@Injectable()
export class TzStatsEffect {
  limit = 0;
  constructor(private action$: Actions, private service: HomeService) {}

  loadRequestEffect$ = createEffect(() => {
    return this.action$.pipe(
      debounceTime(350),
      ofType(fromActions.loadRequest),
      mergeMap(() => {
        this.limit = this.limit + 10
        const params = new HttpParams()
          .set('type', APIParams.type)
          .set('limit', String(this.limit))
          .set('columns', APIParams.columns)
          .set('receiver', APIParams.receiver);

        return this.service.getAllStats(params).pipe(
          map((data: ITableData[]) => fromActions.loadSuccess({ data })),
          catchError((error) => of(fromActions.loadFailure(error)))
        );
      })
    );
  });
}
