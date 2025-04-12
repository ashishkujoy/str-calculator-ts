export const add = (numberStr: string) => {
  return numberStr.split(",")
    .map(token => Number(token))
    .reduce((a, b) => a + b, 0);
}