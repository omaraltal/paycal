import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { debounceTime, map, shareReplay } from 'rxjs/operators';

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
      debounceTime(0),
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
      ),
      shareReplay(1)
    );
  }

  calculateFortnightlyTaxableIncome(
    annuallyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return annuallyTaxableIncome$.pipe(
      map(annuallyTaxableIncome =>
        this.res.fortnightlyMapper(annuallyTaxableIncome)
      ),
      shareReplay(1)
    );
  }

  calculateWeeklyTaxableIncome(
    annuallyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return annuallyTaxableIncome$.pipe(
      map(annuallyTaxableIncome =>
        this.res.weeklyMapper(annuallyTaxableIncome)
      ),
      shareReplay(1)
    );
  }
}
