import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import { PayFrequency } from '@pc/models/pay-frequency';
import { Superannuation } from '@pc/models/superannuation';
import { ResolutionService } from './resolution.service';

@Injectable()
export class TaxableIncomeService {
  constructor(private res: ResolutionService) {}

  calculateAnnuallyTaxableIncome(
    superannuationData$: Observable<Superannuation>,
    income$: Observable<number>,
    superannuationIncluded$: Observable<boolean>,
    payFrequency$: Observable<PayFrequency>
  ): Observable<number> {
    return combineLatest(
      superannuationData$,
      income$,
      superannuationIncluded$,
      payFrequency$
    ).pipe(
      map(([superannuation, income, superannuationIncluded, payFrequency]) => {
        const taxableIncome = superannuationIncluded
          ? income / (1 + superannuation.rate)
          : income;
        return this.res.annuallyMapper(taxableIncome, payFrequency);
      }),
      shareReplay(1)
    );
  }

  calculateMonthlyTaxableIncome(
    annuallyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return annuallyTaxableIncome$.pipe(
      map(annuallyTaxableIncome =>
        this.res.monthlyMapper(annuallyTaxableIncome)
      )
    );
  }

  calculateFortnightlyTaxableIncome(
    annuallyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return annuallyTaxableIncome$.pipe(
      map(annuallyTaxableIncome =>
        this.res.fortnightlyMapper(annuallyTaxableIncome)
      )
    );
  }

  calculateWeeklyTaxableIncome(
    annuallyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return annuallyTaxableIncome$.pipe(
      map(annuallyTaxableIncome => this.res.weeklyMapper(annuallyTaxableIncome))
    );
  }
}
