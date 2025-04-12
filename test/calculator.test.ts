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

test("sum of two multiple comma separated numbers", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

test("sum of numbers containing new line", () => {
  expect(add("1,2,3\n4,5")).toBe(15);
});

test("sum of numbers containing single negative number", () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
});