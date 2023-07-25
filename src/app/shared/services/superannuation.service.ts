import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { debounceTime, map, shareReplay } from 'rxjs/operators';

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
      [superannuationData$,
      income$,
      superannuationIncluded$,
      payFrequency$]
    ).pipe(
      debounceTime(0),
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
      shareReplay(1)
    );
  }

  calculateMonthlySuperannuation(
    annuallySuperannuation$: Observable<number>
  ): Observable<number> {
    return annuallySuperannuation$.pipe(
      map(superannuation => this.res.monthlyMapper(superannuation)),
      shareReplay(1)
    );
  }

  calculateFortnightlySuperannuation(
    annuallySuperannuation$: Observable<number>
  ): Observable<number> {
    return annuallySuperannuation$.pipe(
      map(superannuation => this.res.fortnightlyMapper(superannuation)),
      shareReplay(1)
    );
  }

  calculateWeeklySuperannuation(
    annuallySuperannuation$: Observable<number>
  ): Observable<number> {
    return annuallySuperannuation$.pipe(
      map(superannuation => this.res.weeklyMapper(superannuation)),
      shareReplay(1)
    );
  }
}
