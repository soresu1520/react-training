import { fetchAllFood, fetchOrders, fetchCategories } from "../fetch";
import { getAllFood, getOrders, getCategories } from "../API";

jest.mock("../API", () => ({
  ...jest.requireActual("../API"),
  getOrders: jest.fn(),
  getAllFood: jest.fn(),
  getCategories: jest.fn(),
}));

const responseOrders = {
  data: [
    {
      id: "1231",
      firstName: "Jane",
      lastName: "Doe",
      street: "Legnicka",
      building: "48",
      city: "Wrocław",
      zip: "54-202",
      email: "janedoe@example.com",
      phoneNumber: "111111222",
      notes: "additional info",
      payment: "PayPal",
      price: 24,
      date: "19/09/2022",
      items: [
        {
          id: 4,
          name: "Strawberry Cake",
          quantity: 4,
        },
      ],
    },
    {
      id: "1221",
      firstName: "John",
      lastName: "Doe",
      street: "Kwiatowa",
      building: "8",
      city: "Wrocław",
      zip: "54-202",
      email: "johndoe@example.com",
      phoneNumber: "771111222",
      notes: "",
      payment: "PayPal",
      price: 24,
      date: "20/9/2022",
      items: [
        {
          id: 4,
          name: "Strawberry Cake",
          quantity: 4,
        },
        {
          id: 4,
          name: "Tacos",
          quantity: 1,
        },
      ],
    },
  ],
};

const responseFood = {
  data: [
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
  ],
};

const responseCategories = {
  data: [
    {
      categoryName: "Salad",
      categoryId: "c1",
    },
    {
      categoryName: "Dessert",
      categoryId: "c2",
    },
  ],
};

const sortedCategories = [
  {
    categoryName: "Dessert",
    categoryId: "c2",
  },
  {
    categoryName: "Salad",
    categoryId: "c1",
  },
];

describe("fetch orders", () => {
  test("fetch orders calls API", async () => {
    getOrders.mockResolvedValueOnce(responseOrders);
    await fetchOrders();
    expect(getOrders).toBeCalledTimes(1);
  });

  test("fetch orders throws error", async () => {
    getOrders.mockRejectedValue("Error");
    const fetchedData = await fetchOrders();
    expect(fetchedData).toEqual({ orders: [], message: "Error. Try again" });
  });
});

describe("fetch food", () => {
  test("fetch food calls API", async () => {
    getAllFood.mockResolvedValueOnce(responseFood);
    await fetchAllFood();
    expect(getAllFood).toBeCalledTimes(1);
  });

  test("fetch food throws error", async () => {
    getAllFood.mockRejectedValue("Error");
    const fetchedData = await fetchAllFood();
    expect(fetchedData).toEqual({ food: [], message: "Error. Try again" });
  });
});

describe("fetch categories", () => {
  test("fetch categories calls API and sorts data", async () => {
    getCategories.mockResolvedValueOnce(responseCategories);
    const categories = await fetchCategories();
    expect(getCategories).toBeCalledTimes(1);
    expect(categories).toEqual(sortedCategories);
  });
});
