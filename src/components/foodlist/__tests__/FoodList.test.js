import FoodList from "../FoodList";
import { render, fireEvent, waitFor, within } from "@testing-library/react";
import { fetchAllFood, fetchCategories } from "../../../server/fetch";

jest.mock("../../../server/fetch", () => ({
  ...jest.requireActual("../../../server/fetch"),
  fetchAllFood: jest.fn(),
  fetchCategories: jest.fn(),
}));

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
  {
    id: 3,
    name: "Tacos",
    price: 6,
    categoryId: "c3",
    image: "tacos.png",
    allergens: ["wheat"],
  },
  {
    id: 4,
    name: "Strawberry Cake",
    price: 4.5,
    categoryId: "c2",
    image: "scake.png",
    allergens: ["milk", "eggs"],
  },
  {
    id: 5,
    name: "Ramen",
    price: 12,
    categoryId: "c4",
    image: "ramen.png",
    allergens: ["eggs", "soy", "wheat"],
  },
  {
    id: 6,
    name: "Farfalle",
    price: 7,
    categoryId: "c5",
    image: "farfalle.png",
    allergens: ["eggs", "wheat"],
  },
];

const categories = [
  {
    categoryName: "Dessert",
    categoryId: "c2",
  },
  {
    categoryName: "Japanese",
    categoryId: "c4",
  },
  {
    categoryName: "Mexican",
    categoryId: "c3",
  },
  {
    categoryName: "Pasta",
    categoryId: "c5",
  },
  {
    categoryName: "Salad",
    categoryId: "c1",
  },
];

it("food list renders with list of food and category buttons", async () => {
  fetchAllFood.mockResolvedValueOnce({ food: food, message: "" });
  fetchCategories.mockResolvedValueOnce(categories);

  const foodList = render(<FoodList />);

  expect(foodList.getByText("Loading...")).toBeInTheDocument();

  expect(fetchAllFood).toHaveBeenCalledTimes(1);
  expect(fetchCategories).toHaveBeenCalledTimes(1);

  await waitFor(() => {
    expect(foodList.getAllByTestId("food-card")).toHaveLength(5);
    expect(foodList.getAllByTestId("category")).toHaveLength(categories.length + 1);
  });
});

it("button loads more food items", async () => {
  fetchAllFood.mockResolvedValueOnce({ food: food, message: "" });
  fetchCategories.mockResolvedValueOnce(categories);

  const foodList = render(<FoodList />);

  await waitFor(() => {
    expect(foodList.getAllByTestId("food-card")).toHaveLength(5);
  });

  fireEvent.click(foodList.getByTestId("load-more"));
  expect(foodList.getAllByTestId("food-card")).toHaveLength(6);
});

it("food is filtered by desserts and then by all categories", async () => {
  fetchAllFood.mockResolvedValueOnce({ food: food, message: "" });
  fetchCategories.mockResolvedValueOnce(categories);

  const foodList = render(<FoodList />);

  await waitFor(() => {
    expect(foodList.getAllByTestId("food-card")).toHaveLength(5);
    expect(foodList.getAllByTestId("category")).toHaveLength(categories.length + 1);
  });

  const category = foodList.getByRole("button", { name: /Dessert/i });
  const utils = within(foodList.getByTestId("food-list"));
  fireEvent.click(category);

  expect(foodList.getAllByTestId("food-card")).toHaveLength(2);
  expect(utils.getByText("Pancakes")).toBeInTheDocument();
  expect(utils.queryByText("Ramen")).not.toBeInTheDocument();

  const all = foodList.getByRole("button", { name: /All/i });
  fireEvent.click(all);
  expect(foodList.getAllByTestId("food-card")).toHaveLength(5);
});

test("sorting works correctly", async () => {
  fetchAllFood.mockResolvedValueOnce({ food: food, message: "" });
  fetchCategories.mockResolvedValueOnce(categories);

  const foodList = render(<FoodList />);

  await waitFor(() => {
    expect(foodList.getAllByTestId("food-card")).toHaveLength(5);
  });

  fireEvent.change(foodList.getByTestId("sort"), { target: { value: "alphabetDesc" } });

  const items = foodList.getAllByTestId("food-card");
  expect(items[0]).toHaveTextContent("Tacos");
});
