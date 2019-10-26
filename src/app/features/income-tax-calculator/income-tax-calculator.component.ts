import { Component } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { ResidencyStatus } from '@pc/models/residency-status';
import { IncomeTaxService } from '@pc/shared/services/income-tax-calculator.service';
import { TaxOffsetService } from '@pc/shared/services/tax-offset.service';
import { SuperannuationService } from '@pc/shared/services/superannuation.service';
import { TaxableIncomeService } from '@pc/shared/services/taxable-income.service';
import { MedicareLevyService } from '@pc/shared/services/medicare-levy.service';
import { PayService } from '@pc/shared/services/pay.service';
import { TaxDataService } from '@pc/shared/services/tax-data.service';
import { FormulaBasedTier } from '@pc/models/formula-based-tier';
import { TaxRates } from '@pc/models/tax-rates';

@Component({
  selector: 'app-income-tax-calculator',
  templateUrl: './income-tax-calculator.component.html',
  styleUrls: ['./income-tax-calculator.component.scss'],
})
export class IncomeTaxCalculatorComponent {
  residencyStatus$ = new BehaviorSubject<ResidencyStatus>(
    ResidencyStatus.RESIDENT
  );

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
  incomeYear$ = new BehaviorSubject<number>(2019);
  superannuationIncluded$ = new BehaviorSubject<boolean>(false);
  result$: Observable<number>;

  // tax data
  applicableTaxData$: Observable<TaxRates>;
  taxRatesData$: Observable<{ range: number[]; rate: number }[]>;
  superannuationData$: Observable<number>;
  medicareLevyData$: Observable<FormulaBasedTier[]>;
  lowIncomeTaxOffsetData$: Observable<FormulaBasedTier[]>;
  lowAndMiddleIncomeTaxOffsetData$: Observable<FormulaBasedTier[]>;

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

  // income
  annuallyIncomeTax$: Observable<number>;
  monthlyIncomeTax$: Observable<number>;
  fortnightlyIncomeTax$: Observable<number>;
  weeklyIncomeTax$: Observable<number>;

  // income tax excluding offsets
  annuallyIncomeTaxExcludingOffsets$: Observable<number>;

  // medical levy
  annuallyMedicareLevy$: Observable<number>;
  monthlyMedicareLevy$: Observable<number>;
  fortnightlyMedicareLevy$: Observable<number>;
  weeklyMedicareLevy$: Observable<number>;

  // total taxes
  annuallyTotalTaxes$: Observable<number>;
  monthlyTotalTaxes$: Observable<number>;
  fortnightlyTotalTaxes$: Observable<number>;
  weeklyTotalTaxes$: Observable<number>;

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
    private td: TaxDataService
  ) {}

  ngOnInit() {
    // tax data
    this.applicableTaxData$ = this.td.getApplicableTaxData(
      this.incomeYear$,
      this.residencyStatus$
    );
    this.taxRatesData$ = this.td.getTaxRatesData(this.applicableTaxData$);
    this.superannuationData$ = this.td.getSuperannuationData(
      this.applicableTaxData$
    );
    this.medicareLevyData$ = this.td.getMedicareLevyData(
      this.applicableTaxData$
    );
    this.lowIncomeTaxOffsetData$ = this.td.getLowIncomeTaxOffsetData(
      this.applicableTaxData$
    );
    this.lowAndMiddleIncomeTaxOffsetData$ = this.td.getLowAndMiddleIncomeTaxOffsetData(
      this.applicableTaxData$
    );

    // taxable income
    this.annuallyTaxableIncome$ = this.tic.calculateAnnuallyTaxableIncome(
      this.superannuationData$,
      this.income$,
      this.superannuationIncluded$
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
      this.superannuationIncluded$
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

    // income tax
    this.annuallyIncomeTax$ = this.itc.calculateAnnuallyIncomeTax(
      this.taxRatesData$,
      this.annuallyTaxableIncome$
    );
    this.monthlyIncomeTax$ = this.itc.calculateMonthlyIncomeTax(
      this.annuallyIncomeTax$
    );
    this.fortnightlyIncomeTax$ = this.itc.calculateFortnightlyIncomeTax(
      this.annuallyIncomeTax$
    );
    this.weeklyIncomeTax$ = this.itc.calculateWeeklyIncomeTax(
      this.annuallyIncomeTax$
    );

    // medical levy
    this.annuallyMedicareLevy$ = this.mlc.calculateAnnuallyMedicareLevy(
      this.medicareLevyData$,
      this.annuallyTaxableIncome$
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

    // total taxes
    this.annuallyTotalTaxes$ = this.itc.calculateAnnuallyTotalTaxes(
      this.annuallyIncomeTax$,
      this.annuallyMedicareLevy$
    );
    this.monthlyTotalTaxes$ = this.itc.calculateMonthlyTotalTaxes(
      this.monthlyIncomeTax$,
      this.monthlyMedicareLevy$
    );
    this.fortnightlyTotalTaxes$ = this.itc.calculateFortnightlyTotalTaxes(
      this.fortnightlyIncomeTax$,
      this.fortnightlyMedicareLevy$
    );
    this.weeklyTotalTaxes$ = this.itc.calculateWeeklyTotalTaxes(
      this.weeklyIncomeTax$,
      this.weeklyMedicareLevy$
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
      this.monthlyTotalTaxes$
    );
    this.fortnightlyPay$ = this.payc.calculateFortnightlyPay(
      this.fortnightlyTaxableIncome$,
      this.fortnightlyTotalTaxes$
    );
    this.weeklyPay$ = this.payc.calculateWeeklyPay(
      this.weeklyTaxableIncome$,
      this.weeklyTotalTaxes$
    );

    // pay including tax offsets
    this.annuallyPayIncludingTaxOffsets$ = this.payc.calculateAnnuallyPayIncludingTaxOffsets(
      this.annuallyTaxableIncome$,
      this.annuallyIncomeTaxExcludingOffsets$
    );
  }

  updateIncludeSuperannuation(isIncluded: boolean) {
    this.superannuationIncluded = isIncluded;
  }
}
