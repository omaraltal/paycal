import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { FormulaBasedTier } from '@pc/models/formula-based-tier';
import { ResolutionService } from './resolution.service';

@Injectable()
export class MedicareLevyService {
  constructor(private res: ResolutionService) {}

  calculateAnnuallyMedicareLevy(
    medicareLevyData$: Observable<FormulaBasedTier[]>,
    annuallyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return combineLatest(annuallyTaxableIncome$, medicareLevyData$).pipe(
      map(([annuallyTaxableIncome, medicareLevy]) => {
        let levy = 0;
        if (!medicareLevy) {
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
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }
  calculateMonthlyMedicareLevy(
    annuallyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return annuallyMedicareLevy$.pipe(
      map(annuallyMedicareLevy => this.res.monthlyMapper(annuallyMedicareLevy))
    );
  }
  calculateFortnightlyMedicareLevy(
    annuallyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return annuallyMedicareLevy$.pipe(
      map(annuallyMedicareLevy =>
        this.res.fortnightlyMapper(annuallyMedicareLevy)
      )
    );
  }
  calculateWeeklyMedicareLevy(
    annuallyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return annuallyMedicareLevy$.pipe(
      map(annuallyMedicareLevy => this.res.weeklyMapper(annuallyMedicareLevy))
    );
  }
}
