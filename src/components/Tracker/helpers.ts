export const formatTime = (time: number): string => {
  const minutes = ~~(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds}`;
};
