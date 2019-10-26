import { IncomeTaxTiers } from '@pc/models/income-tax-tiers';

export interface IncomeTaxData {
  [year: string]: IncomeTaxTiers;
}
