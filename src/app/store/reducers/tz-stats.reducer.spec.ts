import {HttpErrorResponse} from '@angular/common/http';

import * as fromActions from '../actions';
import * as fromReducer from './tz-stats.reducer';

import {mockAPIData} from '../../home/mockData';

const {initialState} = fromReducer;

const httpErrorResponse = new HttpErrorResponse({error: true});

describe('TZ Stats Reducer', () => {
  it('should show loading true', () => {
    const action = fromActions.loadRequest();

    const result = fromReducer.reducer(initialState, action);

    const {loading} = result;

    expect(loading).toBe(true);
  });

  it('should load TZ stats success', () => {
    const action = fromActions.loadSuccess({data: mockAPIData});

    const result = fromReducer.reducer(initialState, action);

    const {loading, loaded, entities} = result;

    expect(loaded).toBe(true);
    expect(loading).toBe(false);
    expect(entities[mockAPIData[0].id]).toEqual(mockAPIData[0]);
  });

  it('should load TZ stats error', () => {
    const action = fromActions.loadFailure(httpErrorResponse);

    const result = fromReducer.reducer(initialState, action);

    const {loading, error} = result;

    expect(loading).toBe(false);
    expect(error).toBe(httpErrorResponse.error);
  });
});
