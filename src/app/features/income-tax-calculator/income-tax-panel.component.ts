import { Component, Input } from '@angular/core';

@Component({
  selector: 'pc-income-tax-panel',
  templateUrl: './income-tax-panel.component.html',
  styleUrls: ['./income-tax-panel.component.scss'],
})
export class IncomeTaxPanelComponent {
  @Input() title: string;
  @Input() pay: string;
  @Input() taxableIncome: string;
  @Input() superannuation: string;
  @Input() totalTaxes: string;
  @Input() incomeTax: string;
  @Input() medicareLevy: string;
  @Input() taxOffset: string;
}
