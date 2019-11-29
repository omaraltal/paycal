import { IndividualTaxData } from '@pc/models/Individual-tax-data';
import { ResidencyStatus } from '@pc/models/residency-status';
import { incomeTaxData2017 } from './income-tax-data.2017';

export const incomeTaxData2018: IndividualTaxData = {
  ...incomeTaxData2017,
  [ResidencyStatus.RESIDENT]: {
    tax: incomeTaxData2017[ResidencyStatus.RESIDENT].tax,
    payAsYouGo: [
      { income: 355, a: 0.0, b: 0.0 },
      { income: 422, a: 0.19, b: 67.4635 },
      { income: 528, a: 0.29, b: 109.7327 },
      { income: 711, a: 0.21, b: 67.4635 },
      { income: 1282, a: 0.3477, b: 165.4423 },
      { income: 1730, a: 0.345, b: 161.9808 },
      { income: 3461, a: 0.39, b: 239.8654 },
      { income: 0, a: 0.47, b: 516.7885 },
    ],
  },
  [ResidencyStatus.RESIDENT_NO_TAX_FREE_THRESHOLD]: {
    tax: [
      {
        range: [0, 37000],
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
      { income: 72, a: 0.19, b: 0.19 },
      { income: 361, a: 0.2342, b: 3.213 },
      { income: 932, a: 0.3477, b: 44.2476 },
      { income: 1380, a: 0.345, b: 41.7311 },
      { income: 3111, a: 0.39, b: 103.8657 },
      { income: 0, a: 0.47, b: 352.7888 },
    ],
  },
  [ResidencyStatus.FOREIGN_RESIDENT]: {
    tax: [
      { range: [0, 90000], rate: 32.5 },
      { range: [90000, 180000], rate: 37 },
      { range: [180000, 0], rate: 45 },
    ],
    payAsYouGo: [
      { income: 1730, a: 0.325, b: 0.325 },
      { income: 3461, a: 0.37, b: 77.8846 },
      { income: 0, a: 0.45, b: 354.8077 },
    ],
  },
  [ResidencyStatus.WORKING_HOLIDAY]: {
    tax: [
      {
        range: [0, 37000],
        rate: 0.15,
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
  },
  superannuation: {
    ...incomeTaxData2017.superannuation,
    cap: 216120,
  },
  medicareLevy: [
    {
      range: [0, 22398],
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
    {
      range: [126000],
      formula: () => 0,
    },
  ],
  help: [
    { range: [0, 51957], rate: 0 },
    { range: [51957, 57729], rate: 0.02 },
    { range: [57729, 64306], rate: 0.04 },
    { range: [64306, 70881], rate: 0.045 },
    { range: [70881, 74607], rate: 0.05 },
    { range: [74607, 80197], rate: 0.055 },
    { range: [80197, 86855], rate: 0.06 },
    { range: [86855, 91425], rate: 0.065 },
    { range: [91425, 100613], rate: 0.07 },
    { range: [100613, 107213], rate: 0.075 },
    { range: [107213], rate: 0.08 },
  ],
  helpNoTaxFree: [
    { range: [0, 33757], rate: 0 },
    { range: [33757, 39529], rate: 0.02 },
    { range: [39529, 46106], rate: 0.04 },
    { range: [46106, 52681], rate: 0.045 },
    { range: [52681, 56407], rate: 0.05 },
    { range: [56407, 61997], rate: 0.055 },
    { range: [61997, 68655], rate: 0.06 },
    { range: [68655, 73225], rate: 0.065 },
    { range: [73225, 82413], rate: 0.07 },
    { range: [82413, 89013], rate: 0.075 },
    { range: [89013], rate: 0.08 },
  ],
  sfss: [
    { range: [0, 51957], rate: 0 },
    { range: [51958, 64306], rate: 0.02 },
    { range: [64306, 91425], rate: 0.03 },
    { range: [91425], rate: 0.04 },
  ],
  sfssNoTaxFree: [
    { range: [0, 33757], rate: 0 },
    { range: [33757, 46106], rate: 0.02 },
    { range: [46106, 72225], rate: 0.03 },
    { range: [72225], rate: 0.04 },
  ],
};
