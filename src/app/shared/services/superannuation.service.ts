import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { PayFrequency } from '@pc/models/pay-frequency';
import { Superannuation } from '@pc/models/superannuation';
import { ResolutionService } from './resolution.service';

@Injectable()
export class SuperannuationService {
  constructor(private res: ResolutionService) {}

  calculateAnnuallySuperannuation(
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
      map(
        ([
          superannuationData,
          income,
          superannuationIncluded,
          payFrequency,
        ]) => {
          const superannuation = superannuationIncluded
            ? income - income / (1 + superannuationData.rate)
            : income * superannuationData.rate;
          return this.res.annuallyMapper(superannuation, payFrequency);
        }
      ),
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }

  calculateMonthlySuperannuation(
    annuallySuperannuation$: Observable<number>
  ): Observable<number> {
    return annuallySuperannuation$.pipe(
      map(superannuation => this.res.monthlyMapper(superannuation))
    );
  }

  calculateFortnightlySuperannuation(
    annuallySuperannuation$: Observable<number>
  ): Observable<number> {
    return annuallySuperannuation$.pipe(
      map(superannuation => this.res.fortnightlyMapper(superannuation))
    );
  }

  calculateWeeklySuperannuation(
    annuallySuperannuation$: Observable<number>
  ): Observable<number> {
    return annuallySuperannuation$.pipe(
      map(superannuation => this.res.weeklyMapper(superannuation))
    );
  }
}
