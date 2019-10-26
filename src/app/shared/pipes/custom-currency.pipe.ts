import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

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
    const transformed = this.currencyPipe.transform(parseInt(v));

    return transformed;
  }
}
