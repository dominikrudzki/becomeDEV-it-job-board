import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFromDate'
})
export class TimeFromDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
