// TODO: move to utils
export const formatTime = (time: number): string => {
  const minutes = ~~(time / 60);
  const seconds = time % 60;
  return `${makeTwoDigits(minutes)}:${makeTwoDigits(seconds)}`;
};

const makeTwoDigits = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`;
};
