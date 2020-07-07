import { createEntityAdapter, Dictionary, EntityAdapter, EntityState } from "@ngrx/entity";
import { HttpErrorResponse } from "@angular/common/http";
import { Action, createReducer, on } from "@ngrx/store";

import { ITableData } from "../../shared/components/tz-table";
import * as featureAction from '../actions/tz-stats.action'

export interface ITZStatsState extends EntityState<ITableData> {
  loading: boolean;
  loaded: boolean;
  ids: Array<number>;
  entity: ITableData;
  error: HttpErrorResponse
  entities: Dictionary<ITableData>
}

export const defaultTZStats: ITZStatsState = {
  error: null,
  ids: [],
  entities: {},
  entity: null,
  loaded: false,
  loading: false
}

export const tzStatsAdaptor: EntityAdapter<ITableData> = createEntityAdapter<ITableData>();

export const initialState: ITZStatsState = tzStatsAdaptor.getInitialState(
  defaultTZStats
);

const featureReducer = createReducer(
  initialState,
  on(
    featureAction.loadRequest,
    (state) => ({
      ...state,
      loading: true,
      loaded: false
    })
  ),
  on(
    featureAction.loadFailure,
    (state, { error}) => ({
      ...state,
      error,
      loading: false,
      loaded: false
    })
  ),
  on(featureAction.loadSuccess, (state, { data}) =>
    tzStatsAdaptor.setAll(data, {
      ...state,
      loaded: true,
      loading: false
    })
  )
)

export function reducer(state: ITZStatsState | undefined, action: Action) {
  return featureReducer(state, action);
}
