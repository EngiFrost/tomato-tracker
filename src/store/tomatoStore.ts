import { makeAutoObservable } from 'mobx';

const MINUTE = 60;
const DEFAULT_TOMATO_TIME = 25 * MINUTE;
const DEFAULT_REST_TIME = 5 * MINUTE;

export class TomatoStore {
  constructor() {
    makeAutoObservable(this);
  }

  tomatoDuration: number = DEFAULT_TOMATO_TIME;
  restDuration: number = DEFAULT_REST_TIME;
  tomatoesCount: number = 0;
  time: number = this.tomatoDuration;
  mode: 'tomato' | 'rest' = 'tomato';

  setTomatoDuration(minutes: number) {
    this.tomatoDuration = minutes * MINUTE;
  }

  setRestDuration(minutes: number) {
    this.restDuration = minutes * MINUTE;
  }

  increaseTomatoesCount() {
    this.tomatoesCount += 1;
  }

  reduceTime() {
    this.time -= 1;
  }

  changeMode(mode: 'tomato' | 'rest') {
    if (mode === 'rest') {
      this.mode = 'tomato';
      this.time = this.tomatoDuration;
      this.increaseTomatoesCount();
      return;
    }

    this.mode = 'rest';
    this.time = this.restDuration;
  }
}

export const tomatoStore = new TomatoStore();
