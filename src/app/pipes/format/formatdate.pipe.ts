import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'formatdate'
})

export class FormatDatePipe implements PipeTransform {
    transform(value: Date): any {
        return moment(value).format('DD-MM-YYYY');
    }
}
