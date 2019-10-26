import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IncomeTaxCalculatorRoutingModule } from './income-tax-calculator-routing.module';
import { IncomeTaxCalculatorComponent } from './income-tax-calculator.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@pc/shared/shared.module';
import { IncomeTaxPanelComponent } from './income-tax-panel.component';

@NgModule({
  imports: [
    IncomeTaxCalculatorRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [IncomeTaxCalculatorComponent, IncomeTaxPanelComponent],
})
export class IncomeTaxCalculatorModule {}
