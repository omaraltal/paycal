import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PayFrequency } from '@pc/models/pay-frequency';

@Component({
  selector: 'shared-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent {
  innerIncome: number;
  payFrequency = PayFrequency;
  @Input() set income(income: number) {
    this.innerIncome = income;
    this.incomeChange.emit(income);
  }
  get income(): number {
    return this.innerIncome;
  }
  @Output() incomeChange = new EventEmitter<number>();

  innerFrequency: PayFrequency;
  @Input() set frequency(frequency: PayFrequency) {
    this.innerFrequency = frequency;
    this.frequencyChange.emit(frequency);
  }
  get frequency(): PayFrequency {
    return this.innerFrequency;
  }
  @Output() frequencyChange = new EventEmitter<PayFrequency>();

  selectFrequency(frequency: PayFrequency) {
    this.frequency = frequency;
  }
}
