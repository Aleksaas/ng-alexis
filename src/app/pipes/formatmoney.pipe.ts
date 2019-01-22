import { Pipe, PipeTransform } from '@angular/core';
import { formatNumber, formatCurrency } from '@angular/common';

@Pipe({
    name: 'formatmoney'
})
export class FormatMoneyPipe implements PipeTransform {
    transform(value: any): any {
        return formatCurrency(value, "en", "$ ", "USD", "1.2-2")
    }
}
