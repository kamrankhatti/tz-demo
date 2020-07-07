import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'tzDatePipe'
})
export class TzDatePipe implements PipeTransform {

  transform(date: number, format: string) {
    return moment(date).format(format)
  }

}
