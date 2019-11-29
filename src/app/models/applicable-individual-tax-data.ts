import { Bracket } from './bracket';
import { FormulaBasedTier } from './formula-based-tier';
import { PayAsYouGo } from './pay-as-you-go';
import { Superannuation } from './superannuation';

export interface ApplicableIndividualTaxData {
  tax?: Bracket[];
  payAsYouGo?: PayAsYouGo[];
  superannuation: Superannuation;
  medicareLevy?: FormulaBasedTier[];
  medicareSurcharge?: Bracket[];
  lowIncomeTaxOffset?: FormulaBasedTier[];
  lowAndMiddleIncomeTaxOffset?: FormulaBasedTier[];
  division293?: Bracket[];
  help?: Bracket[];
  helpNoTaxFree?: Bracket[];
  sfss?: Bracket[];
  sfssNoTaxFree?: Bracket[];
}
