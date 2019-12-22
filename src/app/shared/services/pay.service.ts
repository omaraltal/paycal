import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { debounceTime, map, shareReplay } from 'rxjs/operators';

@Injectable()
export class PayService {
  calculateAnnuallyPay(
    annuallyTaxableIncome$: Observable<number>,
    annuallyTotalTaxes$: Observable<number>
  ): Observable<number> {
    return combineLatest(annuallyTaxableIncome$, annuallyTotalTaxes$).pipe(
      debounceTime(0),
      map(([taxableIncome, totalTaxes]) => taxableIncome - totalTaxes),
      shareReplay(1)
    );
  }

  calculateMonthlyPay(
    monthlyTaxableIncome$: Observable<number>,
    monthlyTotalTaxes$: Observable<number>
  ): Observable<number> {
    return combineLatest(monthlyTaxableIncome$, monthlyTotalTaxes$).pipe(
      debounceTime(0),
      map(([taxableIncome, totalTaxes]) => taxableIncome - totalTaxes),
      shareReplay(1)
    );
  }

  calculateFortnightlyPay(
    fortnightlyTaxableIncome$: Observable<number>,
    fortnightlyTotalTaxes$: Observable<number>
  ): Observable<number> {
    return combineLatest(
      fortnightlyTaxableIncome$,
      fortnightlyTotalTaxes$
    ).pipe(
      debounceTime(0),
      map(([taxableIncome, totalTaxes]) => taxableIncome - totalTaxes),
      shareReplay(1)
    );
  }

  calculateWeeklyPay(
    weeklyTaxableIncome$: Observable<number>,
    weeklyTotalTaxes$: Observable<number>
  ): Observable<number> {
    return combineLatest(weeklyTaxableIncome$, weeklyTotalTaxes$).pipe(
      map(([taxableIncome, totalTaxes]) => taxableIncome - totalTaxes),
      shareReplay(1)
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
      debounceTime(0),
      map(
        ([annuallyTaxableIncome, annuallyIncomeTaxExcludingOffsets]) =>
          annuallyTaxableIncome - annuallyIncomeTaxExcludingOffsets
      ),
      shareReplay(1)
    );
  }
}
