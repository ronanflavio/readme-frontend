import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'elapsedTime'})
export class ElapsedTimePipe implements PipeTransform {

  transform(value: string): string {
    const now = moment();
    const date = moment(value);
    const minutes = moment.duration(now.diff(date)).asMinutes();

    if (minutes <= 1) {
      return 'há pouco';
    } else if (minutes > 1 && minutes < 60) {
      return Math.floor(minutes) + ' min';
    } else if (minutes >= 60 && minutes < 1440) {
      return Math.floor(minutes / 60) + 'h';
    } else if (minutes >= 1440) {
      return Math.floor(minutes / 1440) + 'd';
    }

    return 'foo';
  }

}
