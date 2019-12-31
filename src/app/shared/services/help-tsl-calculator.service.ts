import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';

import { Bracket } from '@pc/models/bracket';
import { PayFrequency } from '@pc/models/pay-frequency';
import { debounceTime, map, shareReplay } from 'rxjs/operators';
import { ResolutionService } from './resolution.service';

@Injectable({
  providedIn: 'root',
})
export class HelpTslCalculatorService {
  constructor(private res: ResolutionService) {}

  calculateAnnuallyHELPnTSL(
    taxableIncome$: Observable<number>,
    taxData$: Observable<Bracket[]>,
    helpIncluded$: Observable<boolean>
  ): Observable<number> {
    return combineLatest(taxableIncome$, taxData$, helpIncluded$).pipe(
      debounceTime(0),
      map(([taxableIncome, taxData, helpIncluded]) => {
        if (helpIncluded) {
          return this.calculateHELPnTSL(
            taxableIncome,
            taxData,
            PayFrequency.ANNUALLY
          );
        } else {
          return 0;
        }
      }),
      shareReplay(1)
    );
  }
  calculateMonthlyHELPnTSL(
    taxableIncome$: Observable<number>,
    taxData$: Observable<Bracket[]>,
    helpIncluded$: Observable<boolean>
  ): Observable<number> {
    return combineLatest(taxableIncome$, taxData$, helpIncluded$).pipe(
      debounceTime(0),
      map(([taxableIncome, taxData, helpIncluded]) => {
        if (helpIncluded) {
          return this.calculateHELPnTSL(
            taxableIncome,
            taxData,
            PayFrequency.MONTHLY
          );
        } else {
          return 0;
        }
      }),
      shareReplay(1)
    );
  }
  calculateFortnightlyHELPnTSL(
    taxableIncome$: Observable<number>,
    taxData$: Observable<Bracket[]>,
    helpIncluded$: Observable<boolean>
  ): Observable<number> {
    return combineLatest(taxableIncome$, taxData$, helpIncluded$).pipe(
      debounceTime(0),
      map(([taxableIncome, taxData, helpIncluded]) => {
        if (helpIncluded) {
          return this.calculateHELPnTSL(
            taxableIncome,
            taxData,
            PayFrequency.FORTNIGHTLY
          );
        } else {
          return 0;
        }
      }),
      shareReplay(1)
    );
  }
  calculateWeeklyHELPnTSL(
    taxableIncome$: Observable<number>,
    taxData$: Observable<Bracket[]>,
    helpIncluded$: Observable<boolean>
  ): Observable<number> {
    return combineLatest(taxableIncome$, taxData$, helpIncluded$).pipe(
      debounceTime(0),
      map(([taxableIncome, taxData, helpIncluded]) => {
        if (helpIncluded) {
          return this.calculateHELPnTSL(
            taxableIncome,
            taxData,
            PayFrequency.WEEKLY
          );
        } else {
          return 0;
        }
      }),
      shareReplay(1)
    );
  }

  private calculateHELPnTSL(
    income: number,
    taxData: Bracket[],
    payFrequency: PayFrequency
  ): number {
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

    let annualHelp;
    for (const { range, rate } of taxData.concat([]).reverse()) {
      const [lower, upper] = range;
      if (annualIncome >= lower) {
        annualHelp = annualIncome * rate;
        break;
      }
    }

    let help;
    switch (payFrequency) {
      case PayFrequency.MONTHLY:
        help = this.res.monthly.fromAnnually(annualHelp);
        break;
      case PayFrequency.FORTNIGHTLY:
        help = this.res.fortnightly.fromAnnually(annualHelp);
        break;
      case PayFrequency.WEEKLY:
        help = this.res.weekly.fromAnnually(annualHelp);
        break;
      default:
        help = annualHelp;
    }
    return parseFloat(help.toFixed(2));
  }
}
