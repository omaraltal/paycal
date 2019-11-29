import { IndividualTaxData } from '@pc/models/Individual-tax-data';

export interface YearlyIndividualTaxData {
  [year: string]: IndividualTaxData;
}
