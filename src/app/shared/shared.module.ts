import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './inputs/checkbox/checkbox.component';
import { CurrencyComponent } from './inputs/currency/currency.component';
import { DropdownComponent } from './inputs/dropdown/dropdown.component';
import { FinancialYearComponent } from './inputs/financial-year/financial-year.component';
import { IncomeComponent } from './inputs/income/income.component';
import { LabelComponent } from './inputs/label/label.component';
import { RadioComponent } from './inputs/radio/radio.component';
import { ToggleComponent } from './inputs/toggle/toggle.component';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { HelpTslCalculatorService } from './services/help-tsl-calculator.service';
import { IncomeTaxService } from './services/income-tax-calculator.service';
import { MedicareLevyService } from './services/medicare-levy.service';
import { MoveFocusService } from './services/move-focus.service';
import { PayService } from './services/pay.service';
import { ResolutionService } from './services/resolution.service';
import { SuperannuationService } from './services/superannuation.service';
import { TaxDataService } from './services/tax-data.service';
import { TaxOffsetService } from './services/tax-offset.service';
import { TaxableIncomeService } from './services/taxable-income.service';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [
    CurrencyComponent,
    CustomCurrencyPipe,
    CheckboxComponent,
    ToggleComponent,
    RadioComponent,
    DropdownComponent,
    LabelComponent,
    FinancialYearComponent,
    IncomeComponent,
  ],
  exports: [
    CurrencyComponent,
    CustomCurrencyPipe,
    CheckboxComponent,
    ToggleComponent,
    RadioComponent,
    DropdownComponent,
    LabelComponent,
    FinancialYearComponent,
    IncomeComponent,
  ],
  providers: [
    IncomeTaxService,
    TaxOffsetService,
    SuperannuationService,
    ResolutionService,
    TaxableIncomeService,
    MedicareLevyService,
    PayService,
    TaxDataService,
    MoveFocusService,
    HelpTslCalculatorService,
  ],
})
export class SharedModule {}
