export const createArray = (length: number): Array<number> => {
  return Array.from({ length: length + 1 }, (_, index) => index);
};
