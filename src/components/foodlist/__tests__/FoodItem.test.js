import FoodItem from "../FoodItem";
import { render } from "@testing-library/react";

const food = {
  id: 2,
  name: "Pancakes",
  price: 5,
  categoryId: "c2",
  image: "pancakes.png",
  allergens: ["milk", "eggs", "wheat"],
};

it("food item renders with correct data", () => {
  const foodItem = render(<FoodItem foodItem={food} />);
  expect(foodItem.getByText(food.name)).toBeInTheDocument();
});
