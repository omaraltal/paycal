import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
