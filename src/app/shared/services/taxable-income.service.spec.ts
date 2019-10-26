import { ResolutionService } from './resolution.service';
import { TaxableIncomeService } from './taxable-income.service';

describe('taxable-income.service', () => {
  const resolutionService = new ResolutionService();
  let tic;
  beforeEach(() => {
    tic = new TaxableIncomeService(resolutionService);
  });

  it('should calculate annully tax income correctly', () => {
    tic.calculateAnnuallyTaxableIncome();
  });
});
