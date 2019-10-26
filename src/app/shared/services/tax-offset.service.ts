import { Injectable } from '@angular/core';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { FormulaBasedTier } from '@pc/models/formula-based-tier';

@Injectable()
export class TaxOffsetService {
  public calculateLowAndMiddleIncomeTaxOffset(
    annuallyTaxableIncome$: Observable<number>,
    lowAndMiddleIncomeTaxOffsetData$: Observable<FormulaBasedTier[]>
  ) {
    return combineLatest(
      annuallyTaxableIncome$,
      lowAndMiddleIncomeTaxOffsetData$
    ).pipe(
      map(([annuallyTaxableIncome, lowIncomeTaxOffsetData]) => {
        let offset = 0;
        lowIncomeTaxOffsetData.some(tier => {
          const [lower, upper] = tier.range;
          if (
            (lower === undefined || annuallyTaxableIncome >= lower) &&
            (upper === undefined || annuallyTaxableIncome <= upper)
          ) {
            offset = tier.formula(annuallyTaxableIncome);
            return true;
          }
        });
        return offset;
      })
    );
  }

  public calculateLowIncomeTaxOffset(
    annuallyTaxableIncome$: Observable<number>,
    lowIncomeTaxOffsetData$: Observable<FormulaBasedTier[]>
  ) {
    return combineLatest(annuallyTaxableIncome$, lowIncomeTaxOffsetData$).pipe(
      map(([annuallyTaxableIncome, lowIncomeTaxOffsetData]) => {
        let offset = 0;
        lowIncomeTaxOffsetData.some(tier => {
          const [lower, upper] = tier.range;
          if (
            (lower === undefined || annuallyTaxableIncome >= lower) &&
            (upper === undefined || annuallyTaxableIncome <= upper)
          ) {
            offset = tier.formula(annuallyTaxableIncome);
            return true;
          }
        });
        return offset;
      })
    );
  }

  public calculateTotalIncomeTaxOffset(
    annuallyLowIncomeTaxOffset$: Observable<number>,
    annuallyLowAndMiddleIncomeTaxOffset$: Observable<number>,
    annuallyIncomeTax$: Observable<number>
  ): Observable<number> {
    return combineLatest(
      annuallyLowIncomeTaxOffset$,
      annuallyLowAndMiddleIncomeTaxOffset$,
      annuallyIncomeTax$
    ).pipe(
      map(
        ([
          annuallyLowIncomeTaxOffset,
          annuallyLowAndMiddleIncomeTaxOffset,
          annuallyIncomeTax,
        ]) =>
          Math.min(
            annuallyIncomeTax,
            annuallyLowIncomeTaxOffset + annuallyLowAndMiddleIncomeTaxOffset
          )
      )
    );
  }
}
