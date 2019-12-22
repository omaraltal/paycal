import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { debounceTime, map, shareReplay } from 'rxjs/operators';

import { FormulaBasedTier } from '@pc/models/formula-based-tier';
import { ResidencyStatus } from '@pc/models/residency-status';
import { ResolutionService } from './resolution.service';

@Injectable()
export class MedicareLevyService {
  constructor(private res: ResolutionService) {}

  calculateAnnuallyMedicareLevy(
    medicareLevyData$: Observable<FormulaBasedTier[]>,
    annuallyTaxableIncome$: Observable<number>,
    residencyStatus$: Observable<ResidencyStatus>
  ): Observable<number> {
    return combineLatest(
      annuallyTaxableIncome$,
      medicareLevyData$,
      residencyStatus$
    ).pipe(
      debounceTime(0),
      map(([annuallyTaxableIncome, medicareLevy, residencyStatus]) => {
        let levy = 0;
        if (
          [
            ResidencyStatus.FOREIGN_RESIDENT,
            ResidencyStatus.WORKING_HOLIDAY,
          ].includes(residencyStatus)
        ) {
          return levy;
        }
        medicareLevy.some(tier => {
          const [lower, upper] = tier.range;
          if (
            (lower === undefined || annuallyTaxableIncome >= lower) &&
            (upper === undefined || annuallyTaxableIncome <= upper)
          ) {
            levy = tier.formula(annuallyTaxableIncome);
            return true;
          }
        });
        return levy;
      }),
      shareReplay(1)
    );
  }
  calculateMonthlyMedicareLevy(
    annuallyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return annuallyMedicareLevy$.pipe(
      map(annuallyMedicareLevy => this.res.monthlyMapper(annuallyMedicareLevy)),
      shareReplay(1)
    );
  }
  calculateFortnightlyMedicareLevy(
    annuallyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return annuallyMedicareLevy$.pipe(
      map(
        annuallyMedicareLevy =>
          this.res.fortnightlyMapper(annuallyMedicareLevy),
        shareReplay(1)
      )
    );
  }
  calculateWeeklyMedicareLevy(
    annuallyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return annuallyMedicareLevy$.pipe(
      map(annuallyMedicareLevy => this.res.weeklyMapper(annuallyMedicareLevy)),
      shareReplay(1)
    );
  }
}
