import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { PayAsYouGo } from '@pc/models/pay-as-you-go';
import { PayFrequency } from '@pc/models/pay-frequency';
import { ResolutionService } from './resolution.service';

@Injectable()
export class IncomeTaxService {
  constructor(private res: ResolutionService) {}
  calculateAnnuallyIncomeTax(
    taxRatesData$: Observable<{ range: number[]; rate: number }[]>,
    annuallyTaxableIncome$: Observable<number>
  ): Observable<number> {
    return combineLatest(taxRatesData$, annuallyTaxableIncome$).pipe(
      map(([taxRatesData, annuallyTaxableIncome]) => ({
        annuallyTaxableIncome,
        rates: taxRatesData,
      })),
      map(({ annuallyTaxableIncome, rates }): number =>
        rates.reverse().reduce((acc, curr) => {
          const [lower, upper] = curr.range;
          let tierTaxableIncome = 0;
          if (annuallyTaxableIncome >= lower) {
            if (upper) {
              tierTaxableIncome =
                Math.min(upper, annuallyTaxableIncome) - lower;
            } else {
              tierTaxableIncome = annuallyTaxableIncome - lower;
            }
          }
          return acc + tierTaxableIncome * curr.rate;
        }, 0)
      ),
      map(tax => Math.round(tax)),
      shareReplay(1)
    );
  }

  calculateMonthlyIncomePaygTax(
    monthlyTotalTaxes$: Observable<number>,
    monthlyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return combineLatest(monthlyTotalTaxes$, monthlyMedicareLevy$).pipe(
      map(
        ([monthlyTotalTaxes, monthlyMedicareLevy]) =>
          monthlyTotalTaxes - monthlyMedicareLevy
      )
    );
  }

  calculateFortnightlyIncomePaygTax(
    fortnightlyTotalTaxes$: Observable<number>,
    fortnightlyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return combineLatest(fortnightlyTotalTaxes$, fortnightlyMedicareLevy$).pipe(
      map(
        ([fortnightlyTotalTaxes, fortnightlyMedicareLevy]) =>
          fortnightlyTotalTaxes - fortnightlyMedicareLevy
      )
    );
  }

  calculateWeeklyIncomePaygTax(
    weeklyTotalTaxes$: Observable<number>,
    weeklyMedicareLevy$: Observable<number>
  ): Observable<number> {
    return combineLatest(weeklyTotalTaxes$, weeklyMedicareLevy$).pipe(
      map(([totalTaxes, medicareLevy]) => {
        return totalTaxes - medicareLevy;
      })
    );
  }

  calculateAnnuallyTotalTaxes(
    annuallyIncomeTax$: Observable<number>,
    annuallyMedicareLevy$: Observable<number>
  ) {
    return combineLatest(annuallyIncomeTax$, annuallyMedicareLevy$).pipe(
      map(([incomeTax, medicareLevy]) => incomeTax + medicareLevy)
    );
  }

  calculateMonthlyTotalPaygTaxes(
    monthlyTaxableIncome$: Observable<number>,
    payAsYouGoData$: Observable<PayAsYouGo[]>
  ): Observable<number> {
    return combineLatest(monthlyTaxableIncome$, payAsYouGoData$).pipe(
      map(([monthlyTaxableIncome, payAsYouGoData]) =>
        this.calculatePayAsYouGo(
          monthlyTaxableIncome,
          payAsYouGoData,
          PayFrequency.MONTHLY
        )
      ),
      shareReplay(1)
    );
  }

  calculateFortnightlyTotalPaygTaxes(
    fortnightlyTaxableIncome$: Observable<number>,
    payAsYouGoData$: Observable<PayAsYouGo[]>
  ): Observable<number> {
    return combineLatest(fortnightlyTaxableIncome$, payAsYouGoData$).pipe(
      map(([fortnightlyTaxableIncome, payAsYouGoData]) =>
        this.calculatePayAsYouGo(
          fortnightlyTaxableIncome,
          payAsYouGoData,
          PayFrequency.FORTNIGHTLY
        )
      ),
      shareReplay(1)
    );
  }

  calculateWeeklyTotalPaygTaxes(
    weeklyTaxableIncome$: Observable<number>,
    payAsYouGoData$: Observable<PayAsYouGo[]>
  ): Observable<number> {
    return combineLatest(weeklyTaxableIncome$, payAsYouGoData$).pipe(
      map(([weeklyTaxableIncome, payAsYouGoData]) =>
        this.calculatePayAsYouGo(
          weeklyTaxableIncome,
          payAsYouGoData,
          PayFrequency.WEEKLY
        )
      ),
      shareReplay(1)
    );
  }

  calculateAnnuallyIncomeTaxExcludingOffsets(
    annuallyTotalTaxes$: Observable<number>,
    annuallyTaxOffset$: Observable<number>
  ) {
    return combineLatest(annuallyTotalTaxes$, annuallyTaxOffset$).pipe(
      map(
        ([annuallyTotalTaxes, annuallyTaxOffset]) =>
          annuallyTotalTaxes - annuallyTaxOffset
      )
      // map(tax => Math.round(tax))
    );
  }

  private calculatePayAsYouGo(taxableIncome, payAsYouGoData, payFrequency) {
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
