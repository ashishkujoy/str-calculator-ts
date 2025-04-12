import { add } from "../src/calculator";

test("sum of empty string", () => {
  expect(add("")).toBe(0);
});

test("sum of single number", () => {
  expect(add("2")).toBe(2);
});