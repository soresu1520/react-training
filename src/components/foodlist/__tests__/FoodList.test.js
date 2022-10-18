import FoodList from "../FoodList";
import { render, fireEvent } from "@testing-library/react";

it("sorting works", () => {
  const foodList = render(<FoodList />);
  fireEvent.click(foodList.getByTestId("sort"));
  //TODO
});
