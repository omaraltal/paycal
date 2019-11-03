import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ResidencyStatus } from '@pc/models/residency-status';

import { INCOME_TAX_DATA } from '@pc/data/income-tax-data';
import { FormulaBasedTier } from '@pc/models/formula-based-tier';
import { TaxRates } from '@pc/models/tax-rates';

@Injectable()
export class TaxDataService {
  taxData$ = new BehaviorSubject(INCOME_TAX_DATA);

  getApplicableTaxData(
    taxYear$: Observable<number>,
    residencyStatus$: Observable<ResidencyStatus>
  ): Observable<TaxRates> {
    return combineLatest(this.taxData$, taxYear$, residencyStatus$).pipe(
      map(([taxData, taxYear, residencyStatus]) => {
        return taxData[taxYear][residencyStatus];
      }),
      shareReplay(1)
    );
  }

  getTaxRatesData(
    applicableTaxData$: Observable<TaxRates>
  ): Observable<{ range: number[]; rate: number }[]> {
    return applicableTaxData$.pipe(
      map(data => data.taxRates),
      shareReplay(1)
    );
  }

  getSuperannuationData(
    applicableTaxData$: Observable<TaxRates>
  ): Observable<number> {
    return applicableTaxData$.pipe(
      map(data => data.superannuation),
      shareReplay(1)
    );
  }

  getMedicareLevyData(
    applicableTaxData$: Observable<TaxRates>
  ): Observable<FormulaBasedTier[]> {
    return applicableTaxData$.pipe(
      map(data => data.medicareLevy),
      shareReplay(1)
    );
  }

  getLowIncomeTaxOffsetData(
    applicableTaxData$: Observable<TaxRates>
  ): Observable<FormulaBasedTier[]> {
    return applicableTaxData$.pipe(
      map(data => data.lowIncomeTaxOffset),
      shareReplay(1)
    );
  }

  getLowAndMiddleIncomeTaxOffsetData(
    applicableTaxData$: Observable<TaxRates>
  ): Observable<FormulaBasedTier[]> {
    return applicableTaxData$.pipe(
      map(data => data.lowAndMiddleIncomeTaxOffset),
      shareReplay(1)
    );
  }

  getTaxYearsData(): number[] {
    return Object.keys(INCOME_TAX_DATA)
      .map(i => Number(i))
      .sort((a, b) => b - a);
  }
}
