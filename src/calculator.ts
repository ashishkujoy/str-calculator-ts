const parseNumbers = (numberStr: string) => {
  return numberStr.split("\n")
    .flatMap(line => line.split(","))
    .map(token => Number(token));
}

const validateNumbers = (numbers: number[]) => {
  const negativeNumber = numbers.find(number => number < 0);
  if(negativeNumber !== undefined) {
    throw new Error(`negative numbers not allowed ${negativeNumber}`)
  }
}

export const add = (numberStr: string) => {
  const numbers = parseNumbers(numberStr);
  validateNumbers(numbers);
  return numbers.reduce((a, b) => a + b, 0);
}