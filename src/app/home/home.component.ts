import { Component, OnInit } from '@angular/core';
import { map, take } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromStore from '../store';
import * as fromActions from '../store/actions';
import { ITableData } from "../shared/components/tz-table";
import { ITZStatsState } from "../store/reducers/tz-stats.reducer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  limit: number = 10;
  loading$: Observable<boolean>;
  items$: Observable<ITableData[]>;

  constructor(private store: Store<ITZStatsState>) {}

  loadTZStats() {
    this.store
      .select(fromStore.getTZStatsLoaded)
      .pipe(
        map((loaded: boolean) => {
          // only load http request if its not already loaded, read from store otherwise
          if (!loaded) {
            this.store.dispatch(fromActions.loadRequest({ limit: this.limit }));
          }
        }, take(1)) // To unsubscribe
      )
      .subscribe();

    this.items$ = this.store.select(fromStore.getTzStats);
  }

  nextBatch() {
    this.limit = this.limit + 10
    this.store.dispatch(fromActions.loadRequest({ limit: this.limit }));
  }

  ngOnInit(): void {
    this.loading$ = this.store.select((fromStore.getTZStatsLoading));
    this.loadTZStats();
  }
}
