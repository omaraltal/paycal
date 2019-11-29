import { ResidencyStatus } from '@pc/models/residency-status';
import { YearlyIndividualTaxData } from '@pc/models/yearly-individual-tax-data';

import { incomeTaxData2017 } from './income-tax-data.2017';
import { incomeTaxData2018 } from './income-tax-data.2018';
import { incomeTaxData2019 } from './income-tax-data.2019';

export const INCOME_TAX_DATA: YearlyIndividualTaxData = {
  2019: incomeTaxData2019,
  2018: incomeTaxData2018,
  2017: incomeTaxData2017,
};
