export const padNumber = (
  number: number,
  maxLength = 2,
  fillString = '0'
): string => String(number).padStart(maxLength, fillString);
