import { IndividualTaxData } from '@pc/models/Individual-tax-data';
import { ResidencyStatus } from '@pc/models/residency-status';

export const incomeTaxData2017: IndividualTaxData = {
  [ResidencyStatus.RESIDENT]: {
    tax: [
      {
        range: [0, 18200],
        rate: 0,
      },
      {
        range: [18200, 37000],
        rate: 0.19,
      },
      {
        range: [37000, 90000],
        rate: 0.325,
      },
      {
        range: [90000, 180000],
        rate: 0.37,
      },
      {
        range: [180000],
        rate: 0.45,
      },
    ],
    payAsYouGo: [
      { income: 355, a: 0.0, b: 0.0 },
      { income: 416, a: 0.19, b: 67.4635 },
      { income: 520, a: 0.29, b: 109.1077 },
      { income: 711, a: 0.21, b: 67.4646 },
      { income: 1282, a: 0.3477, b: 165.4435 },
      { income: 1673, a: 0.345, b: 161.9819 },
      { income: 3461, a: 0.39, b: 237.2704 },
      { income: 0, a: 0.47, b: 514.1935 },
    ],
  },
  [ResidencyStatus.RESIDENT_NO_TAX_FREE_THRESHOLD]: {
    tax: [
      {
        range: [0, 37000],
        rate: 0.15,
      },
      {
        range: [37000, 87000],
        rate: 0.325,
      },
      {
        range: [87000, 180000],
        rate: 0.37,
      },
      {
        range: [180000],
        rate: 0.45,
      },
    ],
    payAsYouGo: [
      { income: 66, a: 0.19, b: 0.19 },
      { income: 361, a: 0.2337, b: 2.9035 },
      { income: 932, a: 0.3477, b: 44.1189 },
      { income: 1323, a: 0.345, b: 41.6024 },
      { income: 3111, a: 0.39, b: 101.1408 },
      { income: 0, a: 0.47, b: 350.0639 },
    ],
  },
  [ResidencyStatus.FOREIGN_RESIDENT]: {
    tax: [
      {
        range: [0, 87000],
        rate: 0.325,
      },
      {
        range: [87000, 180000],
        rate: 0.37,
      },
      {
        range: [180000],
        rate: 0.45,
      },
    ],
    payAsYouGo: [
      { income: 1673, a: 0.325, b: 0.325 },
      { income: 3461, a: 0.37, b: 75.2885 },
      { income: 0, a: 0.45, b: 352.2115 },
    ],
  },
  [ResidencyStatus.WORKING_HOLIDAY]: {
    tax: [
      {
        range: [0, 37000],
        rate: 0.15,
      },
      {
        range: [37000, 87000],
        rate: 0.325,
      },
      {
        range: [87000, 180000],
        rate: 0.37,
      },
      {
        range: [180000],
        rate: 0.45,
      },
    ],
  },
  superannuation: {
    cap: 211040,
    rate: 0.095,
  },
  medicareLevy: [
    {
      range: [0, 21980],
      formula: () => 0,
    },
    {
      range: [21980, 27475],
      formula: taxableIncome => (taxableIncome - 21980) * 0.1,
    },
    {
      range: [27475],
      formula: taxableIncome => taxableIncome * 0.02,
    },
  ],
  medicareSurcharge: [
    { range: [0, 90000], rate: 0 },
    { range: [90000, 105000], rate: 0.01 },
    { range: [105000, 140000], rate: 0.0125 },
    { range: [140000], rate: 0.015 },
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
    {
      range: [66667],
      formula: () => 0,
    },
  ],
  division293: [
    { range: [0, 250000], rate: 0.0 },
    { range: [250000], rate: 0.15 },
  ],
  help: [
    { range: [0, 55873], rate: 0 },
    { range: [55873, 62238], rate: 0.04 },
    { range: [62238, 68602], rate: 0.045 },
    { range: [68602, 72207], rate: 0.05 },
    { range: [72207, 77618], rate: 0.055 },
    { range: [77618, 84062], rate: 0.06 },
    { range: [84062, 88486], rate: 0.065 },
    { range: [88486, 97377], rate: 0.07 },
    { range: [97377, 103765], rate: 0.075 },
    { range: [103765], rate: 0.08 },
  ],
  helpNoTaxFree: [
    { range: [0, 36674], rate: 0 },
    { range: [36674, 44038], rate: 0.04 },
    { range: [44038, 50402], rate: 0.045 },
    { range: [50402, 54007], rate: 0.05 },
    { range: [54007, 59418], rate: 0.055 },
    { range: [59418, 65862], rate: 0.06 },
    { range: [65862, 70286], rate: 0.065 },
    { range: [70286, 79177], rate: 0.07 },
    { range: [79177, 85565], rate: 0.075 },
    { range: [85565], rate: 0.08 },
  ],
  sfss: [
    { range: [0, 55874], rate: 0 },
    { range: [55874, 68602], rate: 0.02 },
    { range: [68602, 97377], rate: 0.03 },
    { range: [97377], rate: 0.04 },
  ],
  sfssNoTaxFree: [
    { range: [0, 37674], rate: 0 },
    { range: [37674, 50402], rate: 0.02 },
    { range: [50402, 79177], rate: 0.03 },
    { range: [79177], rate: 0.04 },
  ],
};
