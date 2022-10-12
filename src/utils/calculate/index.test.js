import { calculatePrice } from "./index";

const items = [
  { name: "Cake", quantity: 1, price: 5 },
  { name: "Pasta", quantity: 2, price: 10 },
];

test("total price of items to equal 25", () => {
  expect(calculatePrice(items)).toBe(25);
});

test("total price of empty array to equal 0", () => {
  expect(calculatePrice([])).toBe(0);
});
