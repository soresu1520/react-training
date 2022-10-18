import { countItems } from "./index";

const items = [
  { name: "Cake", quantity: 1, price: 5 },
  { name: "Pasta", quantity: 2, price: 10 },
];

describe("count items in cart", () => {
  test("quantity of items to equal 3", () => {
    expect(countItems(items)).toBe(3);
  });

  test("quantity of =items to equal 0", () => {
    expect(countItems([])).toBe(0);
  });
});
