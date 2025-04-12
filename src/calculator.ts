const parseNumbers = (numberStr: string) => {
  return numberStr.split("\n")
    .flatMap(line => line.split(","))
    .map(token => Number(token));
}

const validateNumbers = (numbers: number[]) => {
  const negativeNumbers = numbers.filter(number => number < 0);
  if(negativeNumbers.length !== 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`)
  }
}

export const add = (numberStr: string) => {
  const numbers = parseNumbers(numberStr);
  validateNumbers(numbers);
  return numbers.reduce((a, b) => a + b, 0);
}