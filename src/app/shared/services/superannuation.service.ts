import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, debounceTime } from 'rxjs/operators';

import { TaxRates } from '@pc/models/tax-rates';
import { ResolutionService } from './resolution.service';

@Injectable()
export class SuperannuationService {
  constructor(private res: ResolutionService) {}

  calculateAnnuallySuperannuation(
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
        return superannuationIncluded
          ? income - income / (1 + superannuation)
          : income * superannuation;
      }),
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }

  calculateMonthlySuperannuation(
    annuallySuperannuation$: Observable<number>
  ): Observable<number> {
    return annuallySuperannuation$.pipe(map(this.res.monthlyMapper));
  }

  calculateFortnightlySuperannuation(
    annuallySuperannuation$
  ): Observable<number> {
    return annuallySuperannuation$.pipe(map(this.res.fortnightlyMapper));
  }

  calculateWeeklySuperannuation(annuallySuperannuation$): Observable<number> {
    return annuallySuperannuation$.pipe(map(this.res.weeklyMapper));
  }
}
