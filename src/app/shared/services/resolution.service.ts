import { Injectable } from '@angular/core';

@Injectable()
export class ResolutionService {
  monthlyMapper(value: number): number {
    return value / 12;
  }
  fortnightlyMapper(value: number): number {
    return value / 26;
  }
  weeklyMapper(value: number): number {
    return value / 52;
  }
}
