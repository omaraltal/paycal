import { ResidencyStatus } from '@pc/models/residency-status';
import { IncomeTaxData } from '@pc/models/income-tax-data';

export const INCOME_TAX_DATA: IncomeTaxData = {
  2019: {
    [ResidencyStatus.RESIDENT]: {
      taxRates: [
        {
          range: [0, 18200],
          rate: 0,
        },
        {
          range: [18201, 37000],
          rate: 0.19,
        },
        {
          range: [37001, 90000],
          rate: 0.325,
        },
        {
          range: [90001, 180000],
          rate: 0.37,
        },
        {
          range: [180001],
          rate: 0.45,
        },
      ],
      superannuation: 0.095,
      medicareLevy: [
        {
          range: [0, 22397],
          formula: () => 0,
        },
        {
          range: [22398, 27997],
          formula: taxableIncome => (taxableIncome - 22398) * 0.1,
        },
        {
          range: [27997],
          formula: taxableIncome => taxableIncome * 0.02,
        },
      ],
      lowIncomeTaxOffset: [
        {
          range: [0, 37000],
          formula: () => 445,
        },
        {
          range: [37000, 66667],
          formula: taxableIncome => 445 - (taxableIncome - 37000) * 0.015,
        },
      ],
      lowAndMiddleIncomeTaxOffset: [
        {
          range: [0, 37000],
          formula: () => 255,
        },
        {
          range: [37000, 48000],
          formula: taxableIncome => 255 + (taxableIncome - 37000) * 0.075,
        },
        {
          range: [48000, 90000],
          formula: () => 1080,
        },
        {
          range: [90000, 126000],
          formula: taxableIncome => 1080 - (taxableIncome - 90000) * 0.03,
        },
      ],
    },
    [ResidencyStatus.NON_RESIDENT]: {
      taxRates: [
        {
          range: [0, 18200],
          rate: 0,
        },
      ],
      superannuation: 0.095,
      medicareLevy: [
        {
          range: [27997],
          formula: income => income * 0.02,
        },
      ],
      lowIncomeTaxOffset: [
        {
          range: [0, 37000],
          formula: () => 445,
        },
      ],
      lowAndMiddleIncomeTaxOffset: [
        {
          range: [0, 37000],
          formula: () => 445,
        },
      ],
    },
  },
  2018: {
    [ResidencyStatus.RESIDENT]: {
      taxRates: [
        {
          range: [0, 18200],
          rate: 0,
        },
        {
          range: [18201, 37000],
          rate: 0.19,
        },
        {
          range: [37001, 90000],
          rate: 0.325,
        },
        {
          range: [90001, 180000],
          rate: 0.37,
        },
        {
          range: [180001],
          rate: 0.45,
        },
      ],
      superannuation: 0.095,
      medicareLevy: [
        {
          range: [0, 22397],
          formula: () => 0,
        },
        {
          range: [22398, 27997],
          formula: taxableIncome => (taxableIncome - 22398) * 0.1,
        },
        {
          range: [27997],
          formula: taxableIncome => taxableIncome * 0.02,
        },
      ],
      lowIncomeTaxOffset: [
        {
          range: [0, 37000],
          formula: () => 445,
        },
        {
          range: [37000, 66667],
          formula: taxableIncome => 445 - (taxableIncome - 37000) * 0.015,
        },
      ],
      lowAndMiddleIncomeTaxOffset: [
        {
          range: [0, 37000],
          formula: () => 255,
        },
        {
          range: [37000, 48000],
          formula: taxableIncome => 255 + (taxableIncome - 37000) * 0.075,
        },
        {
          range: [48000, 90000],
          formula: () => 1080,
        },
        {
          range: [90000, 126000],
          formula: taxableIncome => 1080 - (taxableIncome - 90000) * 0.03,
        },
      ],
    },
    [ResidencyStatus.NON_RESIDENT]: {
      taxRates: [
        {
          range: [0, 18200],
          rate: 0,
        },
      ],
      superannuation: 0.095,
      medicareLevy: [
        {
          range: [27997],
          formula: income => income * 0.02,
        },
      ],
      lowIncomeTaxOffset: [
        {
          range: [0, 37000],
          formula: () => 445,
        },
      ],
      lowAndMiddleIncomeTaxOffset: [
        {
          range: [0, 37000],
          formula: () => 445,
        },
      ],
    },
  },
};
