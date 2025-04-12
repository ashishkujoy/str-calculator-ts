export const add = (numberStr: string) => {
  if(numberStr.includes(",")) {
    const [a, b] = numberStr.split(",");
    return Number(a) + Number(b);
  }
  return numberStr.length === 0 ? 0 : Number(numberStr);
}