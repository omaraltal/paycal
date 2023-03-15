import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';

import { CommonModule } from '@angular/common';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { SharedModule } from '@pc/shared/shared.module';
import { IncomeTaxCalculatorRoutingModule } from './income-tax-calculator-routing.module';
import { IncomeTaxCalculatorComponent } from './income-tax-calculator.component';
import { IncomeTaxPanelComponent } from './income-tax-panel.component';
@NgModule({
  imports: [
    IncomeTaxCalculatorRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule,
  ],
  declarations: [IncomeTaxCalculatorComponent, IncomeTaxPanelComponent],
})
export class IncomeTaxCalculatorModule {}
