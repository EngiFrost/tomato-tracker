import { makeAutoObservable } from 'mobx';

const MINUTE = 60;

export class TomatoStore {
  constructor() {
    makeAutoObservable(this);
  }

  tomatoDuration: number = 25 * MINUTE;
  restDuration: number = 5 * MINUTE;
  tomatoesCount: number = 0;

  setTomatoDuration(minutes: number) {
    this.tomatoDuration = minutes * MINUTE;
  }

  setRestDuration(minutes: number) {
    this.restDuration = minutes * MINUTE;
  }

  increaseTomatoesCount() {
    this.tomatoesCount += 1;
  }
}
