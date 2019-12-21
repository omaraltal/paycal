import { Observable, of } from 'rxjs';

import fortnightlyIncomeTaxTable_2018_19 from '@pc/data/fortnightly-income-tax-table-2018-19.data';
import { INCOME_TAX_DATA } from '@pc/data/income-tax-data';
import monthlyIncomeTaxTable_2018_19 from '@pc/data/monthly-income-tax-table-2018-19.data';
import weeklyIncomeTaxTable_2018_19 from '@pc/data/weekly-income-tax-table-2018-19.data';
import { PayAsYouGo } from '@pc/models/pay-as-you-go';
import { ResidencyStatus } from '@pc/models/residency-status';
import { IncomeTaxService } from './income-tax-calculator.service';
import { ResolutionService } from './resolution.service';

const resolutionService = new ResolutionService();
const incomeTaxService = new IncomeTaxService(resolutionService);
const year = 2018;

monthlyIncomeTaxTable_2018_19.forEach(data => {
  const [income, withTaxFreeThreshold, noTaxFreeThreshold] = data;
  describe(`when earns $${income} a month with`, () => {
    let weeklyPaygData$: Observable<PayAsYouGo[]>;

    describe('when with tax free threshold', () => {
      beforeEach(() => {
        weeklyPaygData$ = of(
          INCOME_TAX_DATA[year][ResidencyStatus.RESIDENT].payAsYouGo
        );
      });
      it('should pay the correct tax', () => {
        incomeTaxService
          .calculateMonthlyTotalPaygTaxes(
            of(ResidencyStatus.RESIDENT),
            of(income),
            weeklyPaygData$
          )
          .subscribe(tax => {
            expect(tax).toEqual(withTaxFreeThreshold);
          });
      });
    });
    describe('when with no tax free threshold', () => {
      beforeEach(() => {
        weeklyPaygData$ = of(
          INCOME_TAX_DATA[year][ResidencyStatus.RESIDENT_NO_TAX_FREE_THRESHOLD]
            .payAsYouGo
        );
      });
      it('should pay the correct tax', () => {
        incomeTaxService
          .calculateMonthlyTotalPaygTaxes(
            of(ResidencyStatus.RESIDENT_NO_TAX_FREE_THRESHOLD),
            of(income),
            weeklyPaygData$
          )
          .subscribe(tax => {
            expect(tax).toEqual(noTaxFreeThreshold);
          });
      });
    });
  });
});

fortnightlyIncomeTaxTable_2018_19.forEach(data => {
  const [income, withTaxFreeThreshold, noTaxFreeThreshold] = data;
  describe(`when earns $${income} a fortnight with`, () => {
    let weeklyPaygData$: Observable<PayAsYouGo[]>;

    describe('when with tax free threshold', () => {
      beforeEach(() => {
        weeklyPaygData$ = of(
          INCOME_TAX_DATA[year][ResidencyStatus.RESIDENT].payAsYouGo
        );
      });
      it('should pay the correct tax', () => {
        incomeTaxService
          .calculateFortnightlyTotalPaygTaxes(
            of(ResidencyStatus.RESIDENT),
            of(income),
            weeklyPaygData$
          )
          .subscribe(tax => {
            expect(tax).toEqual(withTaxFreeThreshold);
          });
      });
    });
    describe('when with no tax free threshold', () => {
      beforeEach(() => {
        weeklyPaygData$ = of(
          INCOME_TAX_DATA[year][ResidencyStatus.RESIDENT_NO_TAX_FREE_THRESHOLD]
            .payAsYouGo
        );
      });
      it('should pay the correct tax', () => {
        incomeTaxService
          .calculateFortnightlyTotalPaygTaxes(
            of(ResidencyStatus.RESIDENT_NO_TAX_FREE_THRESHOLD),
            of(income),
            weeklyPaygData$
          )
          .subscribe(tax => {
            expect(tax).toEqual(noTaxFreeThreshold);
          });
      });
    });
  });
});

weeklyIncomeTaxTable_2018_19.forEach(data => {
  const [income, withTaxFreeThreshold, noTaxFreeThreshold] = data;
  describe(`when earns $${income} a week with`, () => {
    let weeklyPaygData$: Observable<PayAsYouGo[]>;

    describe('when with tax free threshold', () => {
      beforeEach(() => {
        weeklyPaygData$ = of(
          INCOME_TAX_DATA[year][ResidencyStatus.RESIDENT].payAsYouGo
        );
      });
      it('should pay the correct tax', () => {
        incomeTaxService
          .calculateWeeklyTotalPaygTaxes(
            of(ResidencyStatus.RESIDENT),
            of(income),
            weeklyPaygData$
          )
          .subscribe(tax => {
            expect(tax).toEqual(withTaxFreeThreshold);
          });
      });
    });
    describe('when with no tax free threshold', () => {
      beforeEach(() => {
        weeklyPaygData$ = of(
          INCOME_TAX_DATA[year][ResidencyStatus.RESIDENT_NO_TAX_FREE_THRESHOLD]
            .payAsYouGo
        );
      });
      it('should pay the correct tax', () => {
        incomeTaxService
          .calculateWeeklyTotalPaygTaxes(
            of(ResidencyStatus.RESIDENT_NO_TAX_FREE_THRESHOLD),
            of(income),
            weeklyPaygData$
          )
          .subscribe(tax => {
            expect(tax).toEqual(noTaxFreeThreshold);
          });
      });
    });
  });
});
