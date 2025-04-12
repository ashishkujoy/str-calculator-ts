import { add } from "../src/calculator";

test("sum of empty string", () => {
  expect(add("")).toBe(0);
});