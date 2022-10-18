import FoodModal from "../FoodModal";
import { render } from "@testing-library/react";

const onClose = jest.fn();
const food = {
  id: 2,
  name: "Pancakes",
  price: 5,
  categoryId: "c2",
  image: "pancakes.png",
  allergens: ["milk", "eggs", "wheat"],
};

it("modal renders with correct data", () => {
  const foodModal = render(<FoodModal onClose={onClose} open={true} food={food} />);
  expect(foodModal.getByText(food.name)).toBeInTheDocument();
});

it("allergens render correctly", async () => {
  const { getAllByTestId } = render(<FoodModal onClose={onClose} open={true} food={food} />);
  const allergens = getAllByTestId("allergen");
  expect(allergens).toHaveLength(food.allergens.length);
});

describe("modal is opened or closed", () => {
  it("modal is opened", () => {
    const foodModal = render(<FoodModal onClose={onClose} open={true} food={food} />);
    const modalElement = foodModal.queryByTestId(`title-${food.id}`);
    expect(modalElement).toBeTruthy();
  });

  it("modal is closed", () => {
    const foodModal = render(<FoodModal onClose={onClose} open={false} food={food} />);
    const modalElement = foodModal.queryByTestId(`title-${food.id}`);
    expect(modalElement).toBeNull();
  });
});
