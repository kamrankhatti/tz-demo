import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";

import { ITableData } from "./tz-table.interface";

@Component({
  selector: 'tz-table',
  templateUrl: './tz-table.component.html',
  styleUrls: ['./tz-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TzTableComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  @Input() data: ITableData[];
  @Input() loading: boolean = false;

  @Output() loadMore: EventEmitter<number> = new EventEmitter();

  dateFormat = 'MMM D YYYY, hh:mm';

  constructor() {}

  trackByFn(_: number, item: ITableData) {
    return item.id;
  }

  indexChanged() {
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();

    if (end === total) {
      this.loadMore.emit()
    }
  }

  ngOnInit(): void {}
}
