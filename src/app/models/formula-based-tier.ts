export interface FormulaBasedTier {
  range: number[];
  formula(taxableIncome: number): number;
  formula(taxableIncome?: number): number;
}
