import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, debounceTime } from 'rxjs/operators';

import { TaxRates } from '@pc/models/tax-rates';
import { ResolutionService } from './resolution.service';

@Injectable()
export class IncomeTaxService {
  constructor(private res: ResolutionService) {}
  calculateAnnuallyIncomeTax(
    taxRatesData$: Observable<{ range: number[]; rate: number }[]>,
    annuallyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return combineLatest(taxRatesData$, annuallyTaxableIncome$).pipe(
      map(([taxRatesData, annuallyTaxableIncome]) => ({
        annuallyTaxableIncome,
        rates: taxRatesData,
      })),
      map(({ annuallyTaxableIncome, rates }): number =>
        rates.reverse().reduce((acc, curr) => {
          const [lower, upper] = curr.range;
          let tierTaxableIncome = 0;
          if (annuallyTaxableIncome >= lower) {
            if (upper) {
              tierTaxableIncome =
                Math.min(upper, annuallyTaxableIncome) -
                lower +
                Math.min(1, lower);
            } else {
              tierTaxableIncome =
                annuallyTaxableIncome - lower + Math.min(1, lower);
            }
          }
          return acc + tierTaxableIncome * curr.rate;
        }, 0)
      ),
      map(tax => Math.round(tax)),
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }

  calculateMonthlyIncomeTax(
    annuallyIncomeTax$: Observable<number>
  ): Observable<number> {
    return annuallyIncomeTax$.pipe(map(this.res.monthlyMapper));
  }

  calculateFortnightlyIncomeTax(
    annuallyIncomeTax$: Observable<number>
  ): Observable<number> {
    return annuallyIncomeTax$.pipe(map(this.res.fortnightlyMapper));
  }
  calculateWeeklyIncomeTax(
    annuallyIncomeTax$: Observable<number>
  ): Observable<number> {
    return annuallyIncomeTax$.pipe(map(this.res.weeklyMapper));
  }

  calculateAnnuallyTotalTaxes(
    annuallyIncomeTax$: Observable<number>,
    annuallyMedicareLevy$: Observable<number>
  ) {
    return combineLatest(annuallyIncomeTax$, annuallyMedicareLevy$).pipe(
      map(([incomeTax, medicareLevy]) => incomeTax + medicareLevy)
    );
  }

  calculateMonthlyTotalTaxes(
    monthlyIncomeTax$: Observable<number>,
    monthlyMedicareLevy$: Observable<number>
  ) {
    return combineLatest(monthlyIncomeTax$, monthlyMedicareLevy$).pipe(
      map(([incomeTax, medicareLevy]) => incomeTax + medicareLevy)
    );
  }

  calculateFortnightlyTotalTaxes(
    fortnightlyIncomeTax$: Observable<number>,
    fortnightlyMedicareLevy$: Observable<number>
  ) {
    return combineLatest(fortnightlyIncomeTax$, fortnightlyMedicareLevy$).pipe(
      map(([incomeTax, medicareLevy]) => incomeTax + medicareLevy)
    );
  }

  calculateWeeklyTotalTaxes(
    weeklyIncomeTax$: Observable<number>,
    weeklyMedicareLevy$: Observable<number>
  ) {
    return combineLatest(weeklyIncomeTax$, weeklyMedicareLevy$).pipe(
      map(([incomeTax, medicareLevy]) => incomeTax + medicareLevy)
    );
  }

  calculateAnnuallyIncomeTaxExcludingOffsets(
    annuallyTotalTaxes$: Observable<number>,
    annuallyTaxOffset$: Observable<number>
  ) {
    return combineLatest(annuallyTotalTaxes$, annuallyTaxOffset$).pipe(
      map(
        ([annuallyTotalTaxes, annuallyTaxOffset]) =>
          annuallyTotalTaxes - annuallyTaxOffset
      )
    );
  }
}
