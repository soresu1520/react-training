import { countItems, addToCart } from "./index";

const items = [
  { name: "Cake", quantity: 1, price: 5 },
  { name: "Pasta", quantity: 2, price: 10 },
];

const food = [
  {
    id: 1,
    name: "Salad",
    price: 5,
    categoryId: "c1",
    image: "salad.png",
    allergens: ["almonds"],
  },
  {
    id: 2,
    name: "Pancakes",
    price: 5,
    categoryId: "c2",
    image: "pancakes.png",
    allergens: ["milk", "eggs", "wheat"],
  },
];

const cart = [{ productId: 1, name: "Salad", price: 5, image: "salad.png", quantity: 1 }];
const changedQuantity = [
  { productId: 1, name: "Salad", price: 5, image: "salad.png", quantity: 2 },
];
const addedItem = [
  { productId: 1, name: "Salad", price: 5, image: "salad.png", quantity: 1 },
  {
    productId: 2,
    name: "Pancakes",
    price: 5,
    image: "pancakes.png",
    quantity: 1,
  },
];

describe("count items in cart", () => {
  it("quantity of items to equal 3", () => {
    expect(countItems(items)).toBe(3);
  });

  it("quantity of =items to equal 0", () => {
    expect(countItems([])).toBe(0);
  });
});

describe("add item to cart", () => {
  it("add new item to cart", () => {
    const updatedCart = addToCart(cart, food[1]);
    expect(updatedCart).toEqual(addedItem);
  });
  it("add existing item to cart", () => {
    const updatedCart = addToCart(cart, food[0]);
    expect(updatedCart).toEqual(changedQuantity);
  });
});
