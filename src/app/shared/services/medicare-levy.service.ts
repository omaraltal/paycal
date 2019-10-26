import { Injectable } from '@angular/core';

import { Observable, combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { TaxRates } from '@pc/models/tax-rates';
import { ResolutionService } from './resolution.service';
import { FormulaBasedTier } from '@pc/models/formula-based-tier';

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
    return annuallyMedicareLevy$.pipe(map(this.res.monthlyMapper));
  }
  calculateFortnightlyMedicareLevy(
    annuallyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return annuallyMedicareLevy$.pipe(map(this.res.fortnightlyMapper));
  }
  calculateWeeklyMedicareLevy(
    annuallyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return annuallyMedicareLevy$.pipe(map(this.res.weeklyMapper));
  }
}
