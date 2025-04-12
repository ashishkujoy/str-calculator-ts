const customDelimitedNumRegex = /^\/\/(.+)\n([\s\S]*)$/;

const extractDelimiterAndNumStr = (numberStr: string) => {
  const match = customDelimitedNumRegex.exec(numberStr);
  const [delimiter, str] = match === null ? [",", numberStr] : match.slice(1, 3);

  return { delimiter, str };
}

const parseNumbers = (numberStr: string) => {
  const {delimiter, str} = extractDelimiterAndNumStr(numberStr);

  return str.split("\n")
    .flatMap(line => line.split(delimiter))
    .map(token => Number(token));
}

const validateNumbers = (numbers: number[]) => {
  const negativeNumbers = numbers.filter(number => number < 0);
  if (negativeNumbers.length !== 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`)
  }
}

export const add = (numberStr: string) => {
  const numbers = parseNumbers(numberStr);
  validateNumbers(numbers);
  return numbers.reduce((a, b) => a + b, 0);
}