import { add } from "../src/calculator";

test("sum of empty string", () => {
  expect(add("")).toBe(0);
});

test("sum of single number", () => {
  expect(add("2")).toBe(2);
});

test("sum of two comma separated numbers", () => {
  expect(add("1,2")).toBe(3);
});