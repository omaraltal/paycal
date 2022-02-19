import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'income-tax-calculator',
    loadChildren: () =>
      import(
        './features/income-tax-calculator/income-tax-calculator.module'
      ).then(m => m.IncomeTaxCalculatorModule),
  },
  {
    path: '**',
    redirectTo: 'income-tax-calculator',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
