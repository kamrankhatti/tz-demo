import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// pipes
import { TzDatePipe } from './pipes';

//components
import { TzTableComponent, TzSpinnerComponent } from "./components";

@NgModule({
  declarations: [TzTableComponent, TzSpinnerComponent, TzDatePipe],
  imports: [CommonModule, ScrollingModule],
  exports: [TzTableComponent, TzSpinnerComponent]
})
export class SharedModule {}
