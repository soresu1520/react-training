import FoodItem from "../FoodItem";
import { render, fireEvent } from "@testing-library/react";
import SnackbarContext from "../../../context/SnackbarContext";

const food = {
  id: 2,
  name: "Pancakes",
  price: 5,
  categoryId: "c2",
  image: "pancakes.png",
  allergens: ["milk", "eggs", "wheat"],
};

const updatedCart = [
  { productId: 1, name: "Salad", price: 5, image: "salad.png", quantity: 1 },
  { productId: 2, name: "Pancakes", price: 5, image: "pancakes.png", quantity: 1 },
];

const localStorageMock = (function () {
  let store = {
    cart: JSON.stringify([
      { productId: 1, name: "Salad", price: 5, image: "salad.png", quantity: 1 },
    ]),
  };

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

it("food item renders with correct data", () => {
  const foodItem = render(<FoodItem foodItem={food} />);
  expect(foodItem.getByText(food.name)).toBeInTheDocument();
});

it("food item added to cart", () => {
  const foodItem = render(
    <SnackbarContext.Provider value={[{ open: false, message: "", type: "" }, () => {}]}>
      <FoodItem foodItem={food} />
    </SnackbarContext.Provider>
  );

  const add = foodItem.getByTestId(`add-${food.id}`);
  fireEvent.click(add);

  expect(localStorage.getItem("cart")).toEqual(JSON.stringify(updatedCart));
  expect(foodItem.findByTestId("snackbar")).toBeTruthy();
});
