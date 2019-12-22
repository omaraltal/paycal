import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { debounceTime, map, shareReplay } from 'rxjs/operators';

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
      debounceTime(0),
      map(([annuallyTaxableIncome, lowAndMiddleIncomeTaxOffsetData]) => {
        let offset = 0;
        if (!lowAndMiddleIncomeTaxOffsetData) {
          return offset;
        }
        lowAndMiddleIncomeTaxOffsetData.some(tier => {
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
      }),
      shareReplay(1)
    );
  }

  public calculateLowIncomeTaxOffset(
    annuallyTaxableIncome$: Observable<number>,
    lowIncomeTaxOffsetData$: Observable<FormulaBasedTier[]>
  ) {
    return combineLatest(annuallyTaxableIncome$, lowIncomeTaxOffsetData$).pipe(
      debounceTime(0),
      map(([annuallyTaxableIncome, lowIncomeTaxOffsetData]) => {
        let offset = 0;
        if (!lowIncomeTaxOffsetData) {
          return offset;
        }
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
      }),
      shareReplay(1)
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
      debounceTime(0),
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
      ),
      shareReplay(1)
    );
  }
}
