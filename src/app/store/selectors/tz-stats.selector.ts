import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ITableData } from "../../shared/components/tz-table";
import { ITZStatsState, tzStatsAdaptor } from "../reducers/tz-stats.reducer";

export const getFeatureState = createFeatureSelector<ITableData>('tzStats');

export const getAPIState = createSelector(
  getFeatureState,
  (state: any) => state
);

export const getTzStats = createSelector(
  getAPIState,
  tzStatsAdaptor.getSelectors().selectAll
);

export const getTZStatsLoading = createSelector(
  getAPIState,
  (state: ITZStatsState) => state.loading
);

export const getTZStatsLoaded = createSelector(
  getAPIState,
  (state: ITZStatsState) => state.loaded
);
