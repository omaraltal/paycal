import { CurrencyPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pcCurrency',
})
export class CustomCurrencyPipe implements PipeTransform {
  currencyPipe: CurrencyPipe;
  constructor(@Inject(LOCALE_ID) private localeId: string) {
    this.currencyPipe = new CurrencyPipe(localeId);
  }
  transform(value) {
    const v = value.toString().replace(/[^0-9\.]/g, '');
    const transformed = this.currencyPipe.transform(parseInt(v, 10));

    return transformed;
  }
}
