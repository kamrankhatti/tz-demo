import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { ITableData } from '../../shared/components/tz-table';

export const loadRequest = createAction(
  '[TZ Demo] get TZ Stats',
  props<{ limit: number }>()
);

export const loadFailure = createAction(
  '[TZ Demo] get TZ Stats fail',
  props<{ error: HttpErrorResponse }>()
);

export const loadSuccess = createAction(
  '[TZ Demo] get TZ Stats success',
  props<{ data: ITableData[] }>()
);
