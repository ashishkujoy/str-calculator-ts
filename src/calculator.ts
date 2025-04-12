export const add = (numberStr: string) => {
  return numberStr.split("\n")
    .flatMap(line => line.split(","))
    .map(token => Number(token))
    .reduce((a, b) => a + b, 0);
}