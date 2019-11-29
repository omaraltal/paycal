import { Injectable } from '@angular/core';
import { PayFrequency } from '@pc/models/pay-frequency';

@Injectable()
export class ResolutionService {
  annually = {
    fromMonthly(value: number): number {
      return value * 12;
    },
    fromFortnightly(value: number): number {
      return value * 26;
    },
    fromWeekly(value: number): number {
      return value * 52;
    },
  };

  monthly = {
    fromAnnually(value: number): number {
      return value / 12;
    },
    fromFortnightly(value: number): number {
      return (value * 26) / 12;
    },
    fromWeekly(value: number): number {
      return (value * 52) / 12;
    },
  };

  fortnightly = {
    fromAnnually(value: number): number {
      return value / 26;
    },
    fromMonthly(value: number): number {
      return (value * 12) / 26;
    },
    fromWeekly(value: number): number {
      return value * 2;
    },
  };
  weekly = {
    fromAnnually(value: number): number {
      return value / 52;
    },
    fromMonthly(value: number): number {
      return (value * 12) / 52;
    },
    fromFortnightly(value: number): number {
      return value / 2;
    },
  };

  annuallyMapper(value: number, frequency: PayFrequency): number {
    switch (frequency) {
      case PayFrequency.ANNUALLY:
        return value;
      case PayFrequency.MONTHLY:
        return this.annually.fromMonthly(value);
      case PayFrequency.FORTNIGHTLY:
        return this.annually.fromFortnightly(value);
      case PayFrequency.WEEKLY:
        return this.annually.fromWeekly(value);
      // case PayFrequency.DAILY:

      // case PayFrequency.HOURS_PER_WEEK:

      // case PayFrequency.HOURS_PER_DAY:
    }
  }

  monthlyMapper(
    value: number,
    frequency: PayFrequency = PayFrequency.ANNUALLY
  ): number {
    switch (frequency) {
      case PayFrequency.ANNUALLY:
        return this.monthly.fromAnnually(value);
      case PayFrequency.MONTHLY:
        return value;
      case PayFrequency.FORTNIGHTLY:
        return this.monthly.fromFortnightly(value);
      case PayFrequency.WEEKLY:
        return this.monthly.fromWeekly(value);
      // case PayFrequency.DAILY:

      // case PayFrequency.HOURS_PER_WEEK:

      // case PayFrequency.HOURS_PER_DAY:
    }
  }

  fortnightlyMapper(
    value: number,
    frequency: PayFrequency = PayFrequency.ANNUALLY
  ): number {
    switch (frequency) {
      case PayFrequency.ANNUALLY:
        return this.fortnightly.fromAnnually(value);
      case PayFrequency.MONTHLY:
        return this.fortnightly.fromMonthly(value);
      case PayFrequency.FORTNIGHTLY:
        return value;
      case PayFrequency.WEEKLY:
        return this.fortnightly.fromWeekly(value);
      // case PayFrequency.DAILY:

      // case PayFrequency.HOURS_PER_WEEK:

      // case PayFrequency.HOURS_PER_DAY:
    }
  }

  weeklyMapper(
    value: number,
    frequency: PayFrequency = PayFrequency.ANNUALLY
  ): number {
    switch (frequency) {
      case PayFrequency.ANNUALLY:
        return this.weekly.fromAnnually(value);
      case PayFrequency.MONTHLY:
        return this.weekly.fromMonthly(value);
      case PayFrequency.FORTNIGHTLY:
        return this.weekly.fromFortnightly(value);
      case PayFrequency.WEEKLY:
        return value;
      // case PayFrequency.DAILY:

      // case PayFrequency.HOURS_PER_WEEK:

      // case PayFrequency.HOURS_PER_DAY:
    }
  }
}
