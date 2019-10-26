import { FormulaBasedTier } from './formula-based-tier';

export interface TaxRates {
  taxRates: { range: number[]; rate: number }[];
  superannuation: number;
  medicareLevy: FormulaBasedTier[];
  lowIncomeTaxOffset: FormulaBasedTier[];
  lowAndMiddleIncomeTaxOffset: FormulaBasedTier[];
}
