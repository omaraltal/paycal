import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CurrencyComponent } from './inputs/currency/currency.component';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { IncomeTaxService } from './services/income-tax-calculator.service';
import { TaxOffsetService } from './services/tax-offset.service';
import { SuperannuationService } from './services/superannuation.service';
import { ResolutionService } from './services/resolution.service';
import { TaxableIncomeService } from './services/taxable-income.service';
import { MedicareLevyService } from './services/medicare-levy.service';
import { PayService } from './services/pay.service';
import { TaxDataService } from './services/tax-data.service';
import { CheckboxComponent } from './inputs/checkbox/checkbox.component';
import { ToggleComponent } from './inputs/toggle/toggle.component';
import { RadioComponent } from './inputs/radio/radio.component';
import { MoveFocusService } from './services/move-focus.service';
import { DropdownComponent } from './inputs/dropdown/dropdown.component';
import { LabelComponent } from './inputs/label/label.component';

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
  ],
  exports: [
    CurrencyComponent,
    CustomCurrencyPipe,
    CheckboxComponent,
    ToggleComponent,
    RadioComponent,
    DropdownComponent,
    LabelComponent,
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
  ],
})
export class SharedModule {}
