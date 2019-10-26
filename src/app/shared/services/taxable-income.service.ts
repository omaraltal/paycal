import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import { TaxRates } from '@pc/models/tax-rates';
import { ResolutionService } from './resolution.service';

@Injectable()
export class TaxableIncomeService {
  constructor(private res: ResolutionService) {}

  calculateAnnuallyTaxableIncome(
    superannuationData$: Observable<number>,
    income$: Observable<number>,
    superannuationIncluded$: Observable<boolean>
  ): Observable<number> {
    return combineLatest(
      superannuationData$,
      income$,
      superannuationIncluded$
    ).pipe(
      map(([superannuation, income, superannuationIncluded]) => {
        return superannuationIncluded ? income / (1 + superannuation) : income;
      }),
      shareReplay(1)
    );
  }

  calculateMonthlyTaxableIncome(
    annuallyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return annuallyTaxableIncome$.pipe(
      map(this.res.monthlyMapper),
      shareReplay(1)
    );
  }

  calculateFortnightlyTaxableIncome(
    annuallyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return annuallyTaxableIncome$.pipe(
      map(this.res.fortnightlyMapper),
      shareReplay(1)
    );
  }

  calculateWeeklyTaxableIncome(
    annuallyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return annuallyTaxableIncome$.pipe(
      map(this.res.weeklyMapper),
      shareReplay(1)
    );
  }
}
