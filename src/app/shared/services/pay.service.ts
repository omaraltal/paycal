import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable()
export class PayService {
  calculateAnnuallyPay(
    annuallyTaxableIncome$: Observable<number>,
    annuallyTotalTaxes$: Observable<number>
  ): Observable<number> {
    return combineLatest(annuallyTaxableIncome$, annuallyTotalTaxes$).pipe(
      map(([taxableIncome, totalTaxes]) => taxableIncome - totalTaxes)
    );
  }

  calculateMonthlyPay(
    monthlyTaxableIncome$: Observable<number>,
    monthlyTotalTaxes$: Observable<number>
  ): Observable<number> {
    return combineLatest(monthlyTaxableIncome$, monthlyTotalTaxes$).pipe(
      map(([taxableIncome, totalTaxes]) => taxableIncome - totalTaxes)
    );
  }

  calculateFortnightlyPay(
    fortnightlyTaxableIncome$: Observable<number>,
    fortnightlyTotalTaxes$: Observable<number>
  ): Observable<number> {
    return combineLatest(
      fortnightlyTaxableIncome$,
      fortnightlyTotalTaxes$
    ).pipe(map(([taxableIncome, totalTaxes]) => taxableIncome - totalTaxes));
  }

  calculateWeeklyPay(
    weeklyTaxableIncome$: Observable<number>,
    weeklyTotalTaxes$: Observable<number>
  ): Observable<number> {
    return combineLatest(weeklyTaxableIncome$, weeklyTotalTaxes$).pipe(
      map(([taxableIncome, totalTaxes]) => taxableIncome - totalTaxes)
    );
  }
  calculateAnnuallyPayIncludingTaxOffsets(
    annuallyTaxableIncome$: Observable<number>,
    annuallyIncomeTaxExcludingOffsets$: Observable<number>
  ) {
    return combineLatest(
      annuallyTaxableIncome$,
      annuallyIncomeTaxExcludingOffsets$
    ).pipe(
      map(
        ([annuallyTaxableIncome, annuallyIncomeTaxExcludingOffsets]) =>
          annuallyTaxableIncome - annuallyIncomeTaxExcludingOffsets
      ),
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }
}
