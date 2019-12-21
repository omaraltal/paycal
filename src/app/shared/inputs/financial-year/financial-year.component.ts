import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface YearData {
  year: number;
  label: string;
}

@Component({
  selector: 'shared-financial-year',
  templateUrl: './financial-year.component.html',
  styleUrls: ['./financial-year.component.scss'],
})
export class FinancialYearComponent implements OnInit {
  innerYear: number;
  @Input() set year(year: number) {
    this.innerYear = year;
  }
  get year(): number {
    return this.innerYear;
  }
  @Output() yearChange = new EventEmitter<number>();
  currentFinancialYear: number;
  financialYears: {
    year: number;
    label: string;
  }[];
  label: string;
  ngOnInit() {
    this.setYearsData();
  }

  selectYear({ year }: YearData) {
    this.year = year;
    this.yearChange.emit(year);
  }

  private setYearsData() {
    const date: Date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    this.currentFinancialYear = month >= 6 ? year : year - 1;
    this.financialYears = [
      {
        year: this.currentFinancialYear,
        label: `${this.currentFinancialYear}/${(this.currentFinancialYear + 1)
          .toString()
          .substr(2)}`,
      },
      {
        year: this.currentFinancialYear - 1,
        label: `${this.currentFinancialYear -
          1}/${this.currentFinancialYear.toString().substr(2)}`,
      },
      {
        year: this.currentFinancialYear - 2,
        label: `${this.currentFinancialYear - 2}/${(
          this.currentFinancialYear - 1
        )
          .toString()
          .substr(2)}`,
      },
    ];
  }
}
