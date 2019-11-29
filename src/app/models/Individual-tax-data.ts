import { Bracket } from '@pc/models/bracket';
import { ResidencyStatus } from '@pc/models/residency-status';
import { FormulaBasedTier } from './formula-based-tier';
import { PayAsYouGo } from './pay-as-you-go';
import { Superannuation } from './superannuation';

export interface IndividualTaxData {
  [ResidencyStatus.RESIDENT]: { tax: Bracket[]; payAsYouGo?: PayAsYouGo[] };
  [ResidencyStatus.RESIDENT_NO_TAX_FREE_THRESHOLD]: {
    tax: Bracket[];
    payAsYouGo?: PayAsYouGo[];
  };
  [ResidencyStatus.FOREIGN_RESIDENT]: {
    tax: Bracket[];
    payAsYouGo?: PayAsYouGo[];
  };
  [ResidencyStatus.WORKING_HOLIDAY]: { tax: Bracket[] };
  superannuation: Superannuation;
  medicareLevy: FormulaBasedTier[];
  medicareSurcharge: Bracket[];
  lowIncomeTaxOffset: FormulaBasedTier[];
  lowAndMiddleIncomeTaxOffset?: FormulaBasedTier[];
  division293: Bracket[];
  help: Bracket[];
  helpNoTaxFree: Bracket[];
  sfss: Bracket[];
  sfssNoTaxFree: Bracket[];
}
