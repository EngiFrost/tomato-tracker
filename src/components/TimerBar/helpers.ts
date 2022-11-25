export const createArray = (length: number): Array<number> => {
  return Array.from({ length }, (_, index) => index + 1);
};
