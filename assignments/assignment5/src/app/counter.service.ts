import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  constructor() {}

  onActiveToInactive() {
    this.activeToInactiveCount++;
  }

  onInactiveToActive() {
    this.inactiveToActiveCount++;
  }
}
