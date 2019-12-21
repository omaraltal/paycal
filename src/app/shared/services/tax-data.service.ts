import { Injectable } from '@angular/core';

import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { debounceTime, map, shareReplay } from 'rxjs/operators';

import { INCOME_TAX_DATA } from '@pc/data/income-tax-data';
import { ApplicableIndividualTaxData } from '@pc/models/applicable-individual-tax-data';
import { FormulaBasedTier } from '@pc/models/formula-based-tier';
import { PayAsYouGo } from '@pc/models/pay-as-you-go';
import { ResidencyStatus } from '@pc/models/residency-status';
import { Superannuation } from '@pc/models/superannuation';

@Injectable()
export class TaxDataService {
  taxData$ = new BehaviorSubject(INCOME_TAX_DATA);

  getApplicableTaxData(
    taxYear$: Observable<number>,
    residencyStatus$: Observable<ResidencyStatus>
  ): Observable<ApplicableIndividualTaxData> {
    return combineLatest(this.taxData$, taxYear$, residencyStatus$).pipe(
      debounceTime(0),
      map(([taxData, taxYear, residencyStatus]) => {
        const selectedYearTaxData = taxData[taxYear];
        const {
          superannuation,
          medicareLevy,
          medicareSurcharge,
          lowIncomeTaxOffset,
          lowAndMiddleIncomeTaxOffset,
          division293,
          help,
          helpNoTaxFree,
          sfss,
          sfssNoTaxFree,
        } = selectedYearTaxData;

        const { tax } = selectedYearTaxData[residencyStatus];
        let payAsYouGo;
        if (residencyStatus !== ResidencyStatus.WORKING_HOLIDAY) {
          payAsYouGo = selectedYearTaxData[residencyStatus].payAsYouGo;
        }

        switch (residencyStatus) {
          case ResidencyStatus.RESIDENT:
          case ResidencyStatus.RESIDENT_NO_TAX_FREE_THRESHOLD:
          case ResidencyStatus.FOREIGN_RESIDENT:
            return {
              tax,
              payAsYouGo,
              superannuation,
              medicareLevy,
              medicareSurcharge,
              lowIncomeTaxOffset,
              lowAndMiddleIncomeTaxOffset,
              division293,
              help,
              helpNoTaxFree,
              sfss,
              sfssNoTaxFree,
            };
          case ResidencyStatus.WORKING_HOLIDAY:
            return {
              tax,
              superannuation,
            };
        }
      }),
      shareReplay(1)
    );
  }

  getTaxBracketsData(
    applicableTaxData$: Observable<ApplicableIndividualTaxData>
  ): Observable<{ range: number[]; rate: number }[]> {
    return applicableTaxData$.pipe(
      map(data => data.tax),
      shareReplay(1)
    );
  }

  getPayAsYouGoData(
    applicableTaxData$: Observable<ApplicableIndividualTaxData>
  ): Observable<PayAsYouGo[]> {
    return applicableTaxData$.pipe(
      map(data => data.payAsYouGo),
      shareReplay(1)
    );
  }

  getSuperannuationData(
    applicableTaxData$: Observable<ApplicableIndividualTaxData>
  ): Observable<Superannuation> {
    return applicableTaxData$.pipe(
      map(data => data.superannuation),
      shareReplay(1)
    );
  }

  getMedicareLevyData(
    applicableTaxData$: Observable<ApplicableIndividualTaxData>
  ): Observable<FormulaBasedTier[]> {
    return applicableTaxData$.pipe(
      map(data => data.medicareLevy),
      shareReplay(1)
    );
  }

  getLowIncomeTaxOffsetData(
    applicableTaxData$: Observable<ApplicableIndividualTaxData>,
    residencyStatus$: Observable<ResidencyStatus>
  ): Observable<FormulaBasedTier[]> {
    return combineLatest(applicableTaxData$, residencyStatus$).pipe(
      map(([data, residencyStatus]) =>
        residencyStatus === ResidencyStatus.RESIDENT
          ? data.lowIncomeTaxOffset
          : null
      ),
      shareReplay(1)
    );
  }

  getLowAndMiddleIncomeTaxOffsetData(
    applicableTaxData$: Observable<ApplicableIndividualTaxData>,
    residencyStatus$: Observable<ResidencyStatus>
  ): Observable<FormulaBasedTier[]> {
    return combineLatest(applicableTaxData$, residencyStatus$).pipe(
      map(([data, residencyStatus]) =>
        residencyStatus === ResidencyStatus.RESIDENT
          ? data.lowAndMiddleIncomeTaxOffset
          : null
      ),
      shareReplay(1)
    );
  }

  getTaxYearsData(): number[] {
    return Object.keys(INCOME_TAX_DATA)
      .map(i => Number(i))
      .sort((a, b) => b - a);
  }
}
