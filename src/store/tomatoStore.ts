import { makeAutoObservable } from 'mobx';

const MINUTE = 60;
const DEFAULT_TOMATO_TIME = 25 * MINUTE;
const DEFAULT_REST_TIME = 5 * MINUTE;

const audio = new Audio(`${process.env.PUBLIC_URL}/audio/action_sound.mp3`);

// TODO: finite state machine refactoring!
export class TomatoStore {
  constructor() {
    makeAutoObservable(this);
  }

  tomatoDuration: number = DEFAULT_TOMATO_TIME;
  restDuration: number = DEFAULT_REST_TIME;
  tomatoesCount: number = 0;
  time: number = this.tomatoDuration;
  mode: 'tomato' | 'rest' = 'tomato';
  isPaused: boolean = true;
  isDrawerVisible: boolean = false;

  setTomatoDuration(minutes: number) {
    this.tomatoDuration = minutes * MINUTE;
  }

  setRestDuration(minutes: number) {
    this.restDuration = minutes * MINUTE;
  }

  // TODO: use local storage to store settings & tomato count
  increaseTomatoesCount() {
    this.tomatoesCount += 1;
  }

  reduceTime() {
    this.time -= 1;
  }

  // FIXME: do we need args here?
  changeMode(mode: 'tomato' | 'rest') {
    audio.pause();
    audio.currentTime = 0;
    audio.play();

    if (mode === 'rest') {
      this.mode = 'tomato';
      this.time = this.tomatoDuration;
      this.increaseTomatoesCount();
      return;
    }

    this.mode = 'rest';
    this.time = this.restDuration;
  }

  // FIXME: do we need args here?
  toggleDrawer(drawerState: boolean) {
    this.isDrawerVisible = !drawerState;
  }

  // FIXME: do we need args here?
  togglePause(pauseState: boolean) {
    this.isPaused = !pauseState;
  }

  updateDuration(tomatoTime: number, restTime: number) {
    this.tomatoDuration = tomatoTime;
    this.restDuration = restTime;
    this.time = this.mode === 'tomato' ? tomatoTime : restTime;
  }
}

export const tomatoStore = new TomatoStore();
