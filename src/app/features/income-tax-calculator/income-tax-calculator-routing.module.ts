import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { IncomeTaxCalculatorComponent } from './income-tax-calculator.component';

const routes: Route[] = [
  {
    path: '',
    component: IncomeTaxCalculatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeTaxCalculatorRoutingModule {}
