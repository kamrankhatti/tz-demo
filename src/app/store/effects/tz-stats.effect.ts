import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

import * as fromActions from '../actions';
import { ITableData } from "../../shared/components/tz-table";
import { APIParams, HomeService } from "../../home/home.service";

@Injectable()
export class TzStatsEffect {
  constructor(private action$: Actions, private service: HomeService) {}

  loadRequestEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fromActions.loadRequest),
      mergeMap((action) => {
        const { limit } = action
        const params = new HttpParams()
          .set('limit', String(limit))
          .set('type', APIParams.type)
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
