import { ResidencyStatus } from '@pc/models/residency-status';
import { TaxRates } from '@pc/models/tax-rates';

export interface IncomeTaxTiers {
  [ResidencyStatus.RESIDENT]: TaxRates;
  [ResidencyStatus.NON_RESIDENT]: TaxRates;
}
