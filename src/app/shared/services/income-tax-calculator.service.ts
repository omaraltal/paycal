import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { debounceTime, filter, map, shareReplay } from 'rxjs/operators';

import { PayAsYouGo } from '@pc/models/pay-as-you-go';
import { PayFrequency } from '@pc/models/pay-frequency';
import { ResidencyStatus } from '@pc/models/residency-status';
import { ResolutionService } from './resolution.service';

@Injectable()
export class IncomeTaxService {
  constructor(private res: ResolutionService) {}

  calculateAnnuallyIncomeTax(
    taxRatesData$: Observable<{ range: number[]; rate: number }[]>,
    annuallyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return combineLatest([taxRatesData$, annuallyTaxableIncome$]).pipe(
      debounceTime(0),
      map(([taxRatesData, annuallyTaxableIncome]) => {
        return this.calculateIncomeTax(
          annuallyTaxableIncome,
          taxRatesData,
          PayFrequency.ANNUALLY
        );
      }),
      shareReplay(1)
    );
  }

  calculateMonthlyIncomeTax(
    residencyStatus$: Observable<ResidencyStatus>,
    taxRatesData$: Observable<{ range: number[]; rate: number }[]>,
    monthlyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return combineLatest(
      residencyStatus$,
      taxRatesData$,
      monthlyTaxableIncome$
    ).pipe(
      debounceTime(0),
      filter(
        ([residencyStatus]) =>
          residencyStatus === ResidencyStatus.WORKING_HOLIDAY
      ),
      map(([residencyStatus, taxRatesData, monthlyTaxableIncome]) => {
        return this.calculateIncomeTax(
          monthlyTaxableIncome,
          taxRatesData,
          PayFrequency.MONTHLY
        );
      }),
      shareReplay(1)
    );
  }

  calculateFortnightlyIncomeTax(
    residencyStatus$: Observable<ResidencyStatus>,
    taxRatesData$: Observable<{ range: number[]; rate: number }[]>,
    fortnightlyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return combineLatest([
      residencyStatus$,
      taxRatesData$,
      fortnightlyTaxableIncome$
    ]).pipe(
      debounceTime(0),
      filter(
        ([residencyStatus]) =>
          residencyStatus === ResidencyStatus.WORKING_HOLIDAY
      ),
      map(([residencyStatus, taxRatesData, fortnightlyTaxableIncome]) => {
        return this.calculateIncomeTax(
          fortnightlyTaxableIncome,
          taxRatesData,
          PayFrequency.FORTNIGHTLY
        );
      }),
      shareReplay(1)
    );
  }

  calculateWeeklyIncomeTax(
    residencyStatus$: Observable<ResidencyStatus>,
    taxRatesData$: Observable<{ range: number[]; rate: number }[]>,
    weeklyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return combineLatest([
      residencyStatus$,
      taxRatesData$,
      weeklyTaxableIncome$
    ]).pipe(
      debounceTime(0),
      filter(
        ([residencyStatus]) =>
          residencyStatus === ResidencyStatus.WORKING_HOLIDAY
      ),
      map(([residencyStatus, taxRatesData, weeklyTaxableIncome]) => {
        return this.calculateIncomeTax(
          weeklyTaxableIncome,
          taxRatesData,
          PayFrequency.WEEKLY
        );
      }),
      shareReplay(1)
    );
  }

  calculateAnnuallyTotalTaxes(
    annuallyIncomeTax$: Observable<number>,
    annuallyMedicareLevy$: Observable<number>,
    annuallyHELPnTSL$: Observable<number>
  ) {
    return combineLatest(
      annuallyIncomeTax$,
      annuallyMedicareLevy$,
      annuallyHELPnTSL$
    ).pipe(
      debounceTime(0),
      map(
        ([incomeTax, medicareLevy, hELPnTSL]) =>
          incomeTax + medicareLevy + hELPnTSL
      ),
      shareReplay(1)
    );
  }

  calculateMonthlyTotalTaxes(
    residencyStatus$: Observable<ResidencyStatus>,
    monthlyIncomeTax$: Observable<number>,
    monthlyMedicareLevy$: Observable<number>
  ) {
    return combineLatest([
      residencyStatus$,
      monthlyIncomeTax$,
      monthlyMedicareLevy$
    ]).pipe(
      debounceTime(0),
      filter(
        ([residencyStatus]) =>
          residencyStatus === ResidencyStatus.WORKING_HOLIDAY
      ),
      map(
        ([residencyStatus, incomeTax, medicareLevy]) => incomeTax + medicareLevy
      ),
      shareReplay(1)
    );
  }

  calculateFortnightlyTotalTaxes(
    residencyStatus$: Observable<ResidencyStatus>,
    fortnightlyIncomeTax$: Observable<number>,
    fortnightlyMedicareLevy$: Observable<number>
  ) {
    return combineLatest([
      residencyStatus$,
      fortnightlyIncomeTax$,
      fortnightlyMedicareLevy$
    ]).pipe(
      debounceTime(0),
      filter(
        ([residencyStatus]) =>
          residencyStatus === ResidencyStatus.WORKING_HOLIDAY
      ),
      map(
        ([residencyStatus, incomeTax, medicareLevy]) => incomeTax + medicareLevy
      ),
      shareReplay(1)
    );
  }

  calculateWeeklyTotalTaxes(
    residencyStatus$: Observable<ResidencyStatus>,
    weeklyIncomeTax$: Observable<number>,
    weeklyMedicareLevy$: Observable<number>
  ) {
    return combineLatest([
      residencyStatus$,
      weeklyIncomeTax$,
      weeklyMedicareLevy$
    ]).pipe(
      debounceTime(0),
      filter(
        ([residencyStatus]) =>
          residencyStatus === ResidencyStatus.WORKING_HOLIDAY
      ),
      map(
        ([residencyStatus, incomeTax, medicareLevy]) => incomeTax + medicareLevy
      ),
      shareReplay(1)
    );
  }

  calculateMonthlyIncomePaygTax(
    residencyStatus$: Observable<ResidencyStatus>,
    monthlyTotalTaxes$: Observable<number>,
    monthlyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return combineLatest([
      residencyStatus$,
      monthlyTotalTaxes$,
      monthlyMedicareLevy$
    ]).pipe(
      debounceTime(0),
      filter(
        ([residencyStatus]) =>
          residencyStatus !== ResidencyStatus.WORKING_HOLIDAY
      ),
      map(
        ([residencyStatus, monthlyTotalTaxes, monthlyMedicareLevy]) =>
          monthlyTotalTaxes - monthlyMedicareLevy
      ),
      shareReplay(1)
    );
  }

  calculateFortnightlyIncomePaygTax(
    residencyStatus$: Observable<ResidencyStatus>,
    fortnightlyTotalTaxes$: Observable<number>,
    fortnightlyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return combineLatest([
      residencyStatus$,
      fortnightlyTotalTaxes$,
      fortnightlyMedicareLevy$
    ]).pipe(
      debounceTime(0),
      filter(
        ([residencyStatus]) =>
          residencyStatus !== ResidencyStatus.WORKING_HOLIDAY
      ),
      map(
        ([residencyStatus, fortnightlyTotalTaxes, fortnightlyMedicareLevy]) =>
          fortnightlyTotalTaxes - fortnightlyMedicareLevy
      ),
      shareReplay(1)
    );
  }

  calculateWeeklyIncomePaygTax(
    residencyStatus$: Observable<ResidencyStatus>,
    weeklyTotalTaxes$: Observable<number>,
    weeklyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return combineLatest([
      residencyStatus$,
      weeklyTotalTaxes$,
      weeklyMedicareLevy$
    ]).pipe(
      debounceTime(0),
      filter(
        ([residencyStatus]) =>
          residencyStatus !== ResidencyStatus.WORKING_HOLIDAY
      ),
      map(([residencyStatus, totalTaxes, medicareLevy]) => {
        return totalTaxes - medicareLevy;
      }),
      shareReplay(1)
    );
  }

  calculateMonthlyTotalPaygTaxes(
    residencyStatus$: Observable<ResidencyStatus>,
    monthlyTaxableIncome$: Observable<number>,
    payAsYouGoData$: Observable<PayAsYouGo[]>,
    monthlyHELPnTSL$: Observable<number>
  ): Observable<number> {
    return combineLatest([
      residencyStatus$,
      monthlyTaxableIncome$,
      payAsYouGoData$,
      monthlyHELPnTSL$
    ]).pipe(
      debounceTime(0),
      filter(
        ([residencyStatus]) =>
          residencyStatus !== ResidencyStatus.WORKING_HOLIDAY
      ),
      map(
        ([residencyStatus, monthlyTaxableIncome, payAsYouGoData, hELPnTSL]) =>
          this.calculatePayAsYouGo(
            monthlyTaxableIncome,
            payAsYouGoData,
            PayFrequency.MONTHLY
          ) + hELPnTSL
      ),
      shareReplay(1)
    );
  }

  calculateFortnightlyTotalPaygTaxes(
    residencyStatus$: Observable<ResidencyStatus>,
    fortnightlyTaxableIncome$: Observable<number>,
    payAsYouGoData$: Observable<PayAsYouGo[]>,
    fortnightlyHELPnTSL$: Observable<number>
  ): Observable<number> {
    return combineLatest([
      residencyStatus$,
      fortnightlyTaxableIncome$,
      payAsYouGoData$,
      fortnightlyHELPnTSL$
    ]).pipe(
      debounceTime(0),
      filter(
        ([residencyStatus]) =>
          residencyStatus !== ResidencyStatus.WORKING_HOLIDAY
      ),
      map(
        ([
          residencyStatus,
          fortnightlyTaxableIncome,
          payAsYouGoData,
          hELPnTSL,
        ]) =>
          this.calculatePayAsYouGo(
            fortnightlyTaxableIncome,
            payAsYouGoData,
            PayFrequency.FORTNIGHTLY
          ) + hELPnTSL
      ),
      shareReplay(1)
    );
  }

  calculateWeeklyTotalPaygTaxes(
    residencyStatus$: Observable<ResidencyStatus>,
    weeklyTaxableIncome$: Observable<number>,
    payAsYouGoData$: Observable<PayAsYouGo[]>,
    monthlyHELPnTSL$: Observable<number>
  ): Observable<number> {
    return combineLatest([
      residencyStatus$,
      weeklyTaxableIncome$,
      payAsYouGoData$,
      monthlyHELPnTSL$
    ]).pipe(
      debounceTime(0),
      filter(
        ([residencyStatus]) =>
          residencyStatus !== ResidencyStatus.WORKING_HOLIDAY
      ),
      map(
        ([residencyStatus, weeklyTaxableIncome, payAsYouGoData, hELPnTSL]) =>
          this.calculatePayAsYouGo(
            weeklyTaxableIncome,
            payAsYouGoData,
            PayFrequency.WEEKLY
          ) + hELPnTSL
      ),
      shareReplay(1)
    );
  }

  calculateAnnuallyIncomeTaxExcludingOffsets(
    annuallyTotalTaxes$: Observable<number>,
    annuallyTaxOffset$: Observable<number>
  ): Observable<number> {
    return combineLatest([annuallyTotalTaxes$, annuallyTaxOffset$]).pipe(
      debounceTime(0),
      map(
        ([annuallyTotalTaxes, annuallyTaxOffset]) =>
          annuallyTotalTaxes - annuallyTaxOffset
      ),
      shareReplay(1)
    );
  }

  private calculateIncomeTax(income, rates, payFrequency): number {
    let annualIncome: number;
    switch (payFrequency) {
      case PayFrequency.MONTHLY:
        annualIncome = this.res.annually.fromMonthly(income);
        break;
      case PayFrequency.FORTNIGHTLY:
        annualIncome = this.res.annually.fromFortnightly(income);
        break;
      case PayFrequency.WEEKLY:
        annualIncome = this.res.annually.fromWeekly(income);
        break;
      default:
        annualIncome = income;
        break;
    }
    const tax = rates
      .concat([])
      .reverse()
      .reduce((acc, curr) => {
        const [lower, upper] = curr.range;
        let tierTaxableIncome = 0;
        if (annualIncome >= lower) {
          if (upper) {
            tierTaxableIncome = Math.min(upper, annualIncome) - lower;
          } else {
            tierTaxableIncome = annualIncome - lower;
          }
        }
        return acc + tierTaxableIncome * curr.rate;
      }, 0);

    switch (payFrequency) {
      case PayFrequency.MONTHLY:
        return Math.round(this.res.monthly.fromAnnually(tax));
      case PayFrequency.FORTNIGHTLY:
        return Math.round(this.res.fortnightly.fromAnnually(tax));
      case PayFrequency.WEEKLY:
        return Math.round(this.res.weekly.fromAnnually(tax));
      default:
        return Math.round(tax);
    }
  }

  private calculatePayAsYouGo(taxableIncome, payAsYouGoData, payFrequency): number {
    let paygIncome;
    // convert to weekly
    switch (payFrequency) {
      case PayFrequency.MONTHLY:
        // "if the result is an amount ending in 33 cents, add one cent"
        const cents = Math.round(
          100 * (taxableIncome - Math.floor(taxableIncome))
        );
        if (cents === 33) {
          taxableIncome += 0.01;
        }
        paygIncome = Math.floor(this.res.weekly.fromMonthly(taxableIncome));
        paygIncome += 0.99;
        break;
      case PayFrequency.FORTNIGHTLY:
        paygIncome = Math.floor(this.res.weekly.fromFortnightly(taxableIncome));
        paygIncome += 0.99;
        break;
      case PayFrequency.WEEKLY:
      default:
        paygIncome = Math.floor(taxableIncome);
        paygIncome += 0.99;
        break;
    }

    let a = 0;
    let b = 0;
    const bracket = payAsYouGoData.find(
      ({ income: i }) => paygIncome < i || i === 0
    );
    a = bracket.a;
    b = bracket.b;
    let tax = Math.round(paygIncome * a - b);

    // convert back to cycle
    switch (payFrequency) {
      case PayFrequency.MONTHLY:
        tax = (tax * 13) / 3;
        break;
      case PayFrequency.FORTNIGHTLY:
        tax = tax * 2;
        break;
      default:
        break;
    }
    return Math.round(tax);
  }
}
