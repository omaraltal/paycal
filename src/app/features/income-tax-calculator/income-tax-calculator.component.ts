import { Component, OnInit, OnDestroy } from '@angular/core';

import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';

import { ApplicableIndividualTaxData } from '@pc/models/applicable-individual-tax-data';
import { FormulaBasedTier } from '@pc/models/formula-based-tier';
import { PayAsYouGo } from '@pc/models/pay-as-you-go';
import { PayFrequency } from '@pc/models/pay-frequency';
import { ResidencyStatus } from '@pc/models/residency-status';
import { Superannuation } from '@pc/models/superannuation';
import { IncomeTaxService } from '@pc/shared/services/income-tax-calculator.service';
import { MedicareLevyService } from '@pc/shared/services/medicare-levy.service';
import { PayService } from '@pc/shared/services/pay.service';
import { SuperannuationService } from '@pc/shared/services/superannuation.service';
import { TaxDataService } from '@pc/shared/services/tax-data.service';
import { TaxOffsetService } from '@pc/shared/services/tax-offset.service';
import { TaxableIncomeService } from '@pc/shared/services/taxable-income.service';
import { HelpTslCalculatorService } from '@pc/shared/services/help-tsl-calculator.service';
import { Bracket } from '@pc/models/bracket';
import { takeUntil, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-income-tax-calculator',
  templateUrl: './income-tax-calculator.component.html',
  styleUrls: ['./income-tax-calculator.component.scss'],
})
export class IncomeTaxCalculatorComponent implements OnInit, OnDestroy {
  unsubscriber$ = new Subject();
  residencyStatusData = ResidencyStatus;
  payFrequencyData = PayFrequency;
  helpDisabled = false;

  // help
  innerHelp = false;
  set help(value: boolean) {
    this.innerHelp = value;
    this.helpIncluded$.next(value);
  }
  get help(): boolean {
    return this.innerHelp;
  }
  helpIncluded$ = new BehaviorSubject(this.help);

  // residency status
  innerResidencyStatus: ResidencyStatus = ResidencyStatus.RESIDENT;
  residencyStatus$ = new BehaviorSubject<ResidencyStatus>(
    this.innerResidencyStatus
  );
  set residencyStatus(value: ResidencyStatus) {
    this.innerResidencyStatus = value;
    this.residencyStatus$.next(value);
  }
  get residencyStatus(): ResidencyStatus {
    return this.innerResidencyStatus;
  }

  // pay frequency
  payFrequency$ = new BehaviorSubject<PayFrequency>(this.payFrequency);
  innerPayFrequency: PayFrequency = PayFrequency.ANNUALLY;
  set payFrequency(value: PayFrequency) {
    this.innerPayFrequency = value;
    this.payFrequency$.next(value);
  }
  get payFrequency(): PayFrequency {
    return this.innerPayFrequency;
  }

  // income year
  innerIncomeYear = new Date().getFullYear();
  set incomeYear(value: number) {
    this.innerIncomeYear = value;
    this.incomeYear$.next(value);
  }
  get incomeYear(): number {
    return this.innerIncomeYear;
  }

  // superannuation
  innerSuperannuationIncluded = false;
  set superannuationIncluded(value: boolean) {
    this.innerSuperannuationIncluded = value;
    this.superannuationIncluded$.next(value);
  }
  get superannuationIncluded(): boolean {
    return this.innerSuperannuationIncluded;
  }

  innerIncome = 163200;
  set income(value: number) {
    this.innerIncome = value;
    this.income$.next(value);
  }
  get income(): number {
    return this.innerIncome;
  }
  income$ = new BehaviorSubject<number>(this.income);
  incomeYear$ = new BehaviorSubject<number>(this.incomeYear);
  superannuationIncluded$ = new BehaviorSubject<boolean>(false);
  result$: Observable<number>;

  // tax data
  applicableTaxData$: Observable<ApplicableIndividualTaxData>;
  taxBracketData$: Observable<{ range: number[]; rate: number }[]>;
  payAsYouGoData$: Observable<PayAsYouGo[]>;
  superannuationData$: Observable<Superannuation>;
  medicareLevyData$: Observable<FormulaBasedTier[]>;
  lowIncomeTaxOffsetData$: Observable<FormulaBasedTier[]>;
  lowAndMiddleIncomeTaxOffsetData$: Observable<FormulaBasedTier[]>;
  helpData$: Observable<Bracket[]>;
  helpNoTaxFreeData$: Observable<Bracket[]>;
  sfssData$: Observable<Bracket[]>;
  sfssNoTaxFreeData$: Observable<Bracket[]>;
  incomeYears: number[];

  // pay
  annuallyPay$: Observable<number>;
  monthlyPay$: Observable<number>;
  fortnightlyPay$: Observable<number>;
  weeklyPay$: Observable<number>;

  // taxable income
  annuallyTaxableIncome$: Observable<number>;
  monthlyTaxableIncome$: Observable<number>;
  fortnightlyTaxableIncome$: Observable<number>;
  weeklyTaxableIncome$: Observable<number>;

  // superannuation
  annuallySuperannuation$: Observable<number>;
  monthlySuperannuation$: Observable<number>;
  fortnightlySuperannuation$: Observable<number>;
  weeklySuperannuation$: Observable<number>;

  // medical levy
  annuallyMedicareLevy$: Observable<number>;
  monthlyMedicareLevy$: Observable<number>;
  fortnightlyMedicareLevy$: Observable<number>;
  weeklyMedicareLevy$: Observable<number>;

  // income tax
  annuallyIncomeTax$: Observable<number>;
  monthlyIncomeTax$: Observable<number>;
  fortnightlyIncomeTax$: Observable<number>;
  weeklyIncomeTax$: Observable<number>;

  // help and TSL
  annuallyHELPnTSL$: Observable<number>;
  monthlyHELPnTSL$: Observable<number>;
  fortnightlyHELPnTSL$: Observable<number>;
  weeklyHELPnTSL$: Observable<number>;

  // total taxes
  annuallyTotalTaxes$: Observable<number>;
  monthlyTotalTaxes$: Observable<number>;
  fortnightlyTotalTaxes$: Observable<number>;
  weeklyTotalTaxes$: Observable<number>;

  // total payg taxes
  monthlyTotalPaygTaxes$: Observable<number>;
  fortnightlyTotalPaygTaxes$: Observable<number>;
  weeklyTotalPaygTaxes$: Observable<number>;

  // income payg tax
  monthlyIncomePaygTax$: Observable<number>;
  fortnightlyIncomePaygTax$: Observable<number>;
  weeklyIncomePaygTax$: Observable<number>;

  // income tax excluding offsets
  annuallyIncomeTaxExcludingOffsets$: Observable<number>;

  // total taxes excluding offsets
  annuallyTotalTaxesExcludingOffsets$: Observable<number>;

  // tax offset
  annuallyLowIncomeTaxOffset$: Observable<number>;

  // low and middle income tax offset
  annuallyLowAndMiddleIncomeTaxOffset$: Observable<number>;

  // tax offset
  annuallyTaxOffset$: Observable<number>;

  // pay including tax offsets
  annuallyPayIncludingTaxOffsets$: Observable<number>;

  constructor(
    private itc: IncomeTaxService,
    private toc: TaxOffsetService,
    private sc: SuperannuationService,
    private tic: TaxableIncomeService,
    private mlc: MedicareLevyService,
    private payc: PayService,
    private td: TaxDataService,
    private htcs: HelpTslCalculatorService
  ) {}

  ngOnInit() {
    // tax data
    this.applicableTaxData$ = this.td.getApplicableTaxData(
      this.incomeYear$,
      this.residencyStatus$
    );
    this.taxBracketData$ = this.td.getTaxBracketsData(this.applicableTaxData$);
    this.payAsYouGoData$ = this.td.getPayAsYouGoData(this.applicableTaxData$);
    this.superannuationData$ = this.td.getSuperannuationData(
      this.applicableTaxData$
    );
    this.medicareLevyData$ = this.td.getMedicareLevyData(
      this.applicableTaxData$
    );
    this.lowIncomeTaxOffsetData$ = this.td.getLowIncomeTaxOffsetData(
      this.applicableTaxData$,
      this.residencyStatus$
    );
    this.lowAndMiddleIncomeTaxOffsetData$ = this.td.getLowAndMiddleIncomeTaxOffsetData(
      this.applicableTaxData$,
      this.residencyStatus$
    );
    this.helpData$ = this.td.getHelpData(
      this.applicableTaxData$,
      this.residencyStatus$
    );
    this.incomeYears = this.td.getTaxYearsData();

    // taxable income
    this.annuallyTaxableIncome$ = this.tic.calculateAnnuallyTaxableIncome(
      this.superannuationData$,
      this.income$,
      this.superannuationIncluded$,
      this.payFrequency$
    );
    this.monthlyTaxableIncome$ = this.tic.calculateMonthlyTaxableIncome(
      this.annuallyTaxableIncome$
    );
    this.fortnightlyTaxableIncome$ = this.tic.calculateFortnightlyTaxableIncome(
      this.annuallyTaxableIncome$
    );
    this.weeklyTaxableIncome$ = this.tic.calculateWeeklyTaxableIncome(
      this.annuallyTaxableIncome$
    );

    // superannuation
    this.annuallySuperannuation$ = this.sc.calculateAnnuallySuperannuation(
      this.superannuationData$,
      this.income$,
      this.superannuationIncluded$,
      this.payFrequency$
    );
    this.monthlySuperannuation$ = this.sc.calculateMonthlySuperannuation(
      this.annuallySuperannuation$
    );
    this.fortnightlySuperannuation$ = this.sc.calculateFortnightlySuperannuation(
      this.annuallySuperannuation$
    );
    this.weeklySuperannuation$ = this.sc.calculateWeeklySuperannuation(
      this.annuallySuperannuation$
    );

    // medical levy
    this.annuallyMedicareLevy$ = this.mlc.calculateAnnuallyMedicareLevy(
      this.medicareLevyData$,
      this.annuallyTaxableIncome$,
      this.residencyStatus$
    );
    this.monthlyMedicareLevy$ = this.mlc.calculateMonthlyMedicareLevy(
      this.annuallyMedicareLevy$
    );
    this.fortnightlyMedicareLevy$ = this.mlc.calculateFortnightlyMedicareLevy(
      this.annuallyMedicareLevy$
    );
    this.weeklyMedicareLevy$ = this.mlc.calculateWeeklyMedicareLevy(
      this.annuallyMedicareLevy$
    );

    // income tax
    this.annuallyIncomeTax$ = this.itc.calculateAnnuallyIncomeTax(
      this.taxBracketData$,
      this.annuallyTaxableIncome$
    );
    this.monthlyIncomeTax$ = this.itc.calculateMonthlyIncomeTax(
      this.residencyStatus$,
      this.taxBracketData$,
      this.monthlyTaxableIncome$
    );
    this.fortnightlyIncomeTax$ = this.itc.calculateFortnightlyIncomeTax(
      this.residencyStatus$,
      this.taxBracketData$,
      this.fortnightlyTaxableIncome$
    );
    this.weeklyIncomeTax$ = this.itc.calculateWeeklyIncomeTax(
      this.residencyStatus$,
      this.taxBracketData$,
      this.weeklyTaxableIncome$
    );

    // help and TSL
    this.annuallyHELPnTSL$ = this.htcs.calculateAnnuallyHELPnTSL(
      this.annuallyTaxableIncome$,
      this.helpData$,
      this.helpIncluded$
    );
    this.monthlyHELPnTSL$ = this.htcs.calculateMonthlyHELPnTSL(
      this.monthlyTaxableIncome$,
      this.helpData$,
      this.helpIncluded$
    );
    this.fortnightlyHELPnTSL$ = this.htcs.calculateFortnightlyHELPnTSL(
      this.fortnightlyTaxableIncome$,
      this.helpData$,
      this.helpIncluded$
    );
    this.weeklyHELPnTSL$ = this.htcs.calculateWeeklyHELPnTSL(
      this.weeklyTaxableIncome$,
      this.helpData$,
      this.helpIncluded$
    );

    // total taxes
    this.annuallyTotalTaxes$ = this.itc.calculateAnnuallyTotalTaxes(
      this.annuallyIncomeTax$,
      this.annuallyMedicareLevy$,
      this.annuallyHELPnTSL$
    );
    this.monthlyTotalTaxes$ = this.itc.calculateMonthlyTotalTaxes(
      this.residencyStatus$,
      this.monthlyIncomeTax$,
      this.monthlyMedicareLevy$
    );
    this.fortnightlyTotalTaxes$ = this.itc.calculateFortnightlyTotalTaxes(
      this.residencyStatus$,
      this.fortnightlyIncomeTax$,
      this.fortnightlyMedicareLevy$
    );
    this.weeklyTotalTaxes$ = this.itc.calculateWeeklyTotalTaxes(
      this.residencyStatus$,
      this.weeklyIncomeTax$,
      this.weeklyMedicareLevy$
    );

    // total payg tax
    this.monthlyTotalPaygTaxes$ = merge(
      this.itc.calculateMonthlyTotalPaygTaxes(
        this.residencyStatus$,
        this.monthlyTaxableIncome$,
        this.payAsYouGoData$,
        this.monthlyHELPnTSL$
      ),
      this.monthlyTotalTaxes$
    );

    this.fortnightlyTotalPaygTaxes$ = merge(
      this.itc.calculateFortnightlyTotalPaygTaxes(
        this.residencyStatus$,
        this.fortnightlyTaxableIncome$,
        this.payAsYouGoData$,
        this.fortnightlyHELPnTSL$
      ),
      this.fortnightlyTotalTaxes$
    );

    this.weeklyTotalPaygTaxes$ = merge(
      this.itc.calculateWeeklyTotalPaygTaxes(
        this.residencyStatus$,
        this.weeklyTaxableIncome$,
        this.payAsYouGoData$,
        this.weeklyHELPnTSL$
      ),
      this.weeklyTotalTaxes$
    );

    // payg tax

    this.monthlyIncomePaygTax$ = merge(
      this.itc.calculateMonthlyIncomePaygTax(
        this.residencyStatus$,
        this.monthlyTaxableIncome$,
        this.monthlyMedicareLevy$
      ),
      this.monthlyIncomeTax$
    );

    this.fortnightlyIncomePaygTax$ = merge(
      this.itc.calculateFortnightlyIncomePaygTax(
        this.residencyStatus$,
        this.fortnightlyTaxableIncome$,
        this.fortnightlyMedicareLevy$
      ),
      this.fortnightlyIncomeTax$
    );

    this.weeklyIncomePaygTax$ = merge(
      this.itc.calculateWeeklyIncomePaygTax(
        this.residencyStatus$,
        this.weeklyTaxableIncome$,
        this.weeklyMedicareLevy$
      ),
      this.weeklyIncomeTax$
    );

    // low income tax offset
    this.annuallyLowIncomeTaxOffset$ = this.toc.calculateLowIncomeTaxOffset(
      this.annuallyTaxableIncome$,
      this.lowIncomeTaxOffsetData$
    );

    // low income and middle tax offset
    this.annuallyLowAndMiddleIncomeTaxOffset$ = this.toc.calculateLowAndMiddleIncomeTaxOffset(
      this.annuallyTaxableIncome$,
      this.lowAndMiddleIncomeTaxOffsetData$
    );

    // total tax offset
    this.annuallyTaxOffset$ = this.toc.calculateTotalIncomeTaxOffset(
      this.annuallyLowIncomeTaxOffset$,
      this.annuallyLowAndMiddleIncomeTaxOffset$,
      this.annuallyIncomeTax$
    );

    // total tax excluding offsets
    this.annuallyIncomeTaxExcludingOffsets$ = this.itc.calculateAnnuallyIncomeTaxExcludingOffsets(
      this.annuallyTotalTaxes$,
      this.annuallyTaxOffset$
    );

    // pay
    this.annuallyPay$ = this.payc.calculateAnnuallyPay(
      this.annuallyTaxableIncome$,
      this.annuallyTotalTaxes$
    );
    this.monthlyPay$ = this.payc.calculateMonthlyPay(
      this.monthlyTaxableIncome$,
      this.monthlyTotalPaygTaxes$
    );
    this.fortnightlyPay$ = this.payc.calculateFortnightlyPay(
      this.fortnightlyTaxableIncome$,
      this.fortnightlyTotalPaygTaxes$
    );
    this.weeklyPay$ = this.payc.calculateWeeklyPay(
      this.weeklyTaxableIncome$,
      this.weeklyTotalPaygTaxes$
    );

    // pay including tax offsets
    this.annuallyPayIncludingTaxOffsets$ = this.payc.calculateAnnuallyPayIncludingTaxOffsets(
      this.annuallyTaxableIncome$,
      this.annuallyIncomeTaxExcludingOffsets$
    );

    this.residencyStatus$
      .pipe(
        tap(residencyStatus => {
          if (residencyStatus === ResidencyStatus.WORKING_HOLIDAY) {
            this.help = false;
            this.helpDisabled = true;
          } else {
            this.helpDisabled = false;
          }
        }),
        takeUntil(this.unsubscriber$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

  updateIncludeSuperannuation(isIncluded: boolean) {
    this.superannuationIncluded = isIncluded;
  }

  onIncomeYearSelectionChange(year) {
    this.incomeYear$.next(year);
  }
}
