import { getAllFood, getCategories, getOrders, postOrder } from "./API";
import axios from "axios";

jest.mock("axios");

//zmienić trzy metody API na jedno get?
//czy testować tylko jedną metodę z get z trzech obecnych?

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

const categories = [
  {
    categoryName: "Salad",
    categoryId: "c1",
  },
  {
    categoryName: "Dessert",
    categoryId: "c2",
  },
];

const orders = [
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
      {
        id: 4,
        name: "Tacos",
        quantity: 1,
      },
    ],
  },
];

const order = {
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
};

const errorMessage = "Error";

describe("get food", () => {
  it("gets food successfully from an API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(food));
    await expect(getAllFood()).resolves.toEqual(food);
  });

  it("gets food with an error from an API", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(getAllFood()).rejects.toThrow(errorMessage);
  });
});

describe("get categories", () => {
  it("gets categories successfully from an API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(categories));
    await expect(getCategories()).resolves.toEqual(categories);
  });

  it("gets categories with an error from an API", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(getCategories()).rejects.toThrow(errorMessage);
  });
});

describe("get orders", () => {
  it("gets orders successfully from an API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(orders));
    await expect(getOrders()).resolves.toEqual(orders);
  });

  it("gets orders with an error from an API", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(getOrders()).rejects.toThrow(errorMessage);
  });
});

describe("post an order", () => {
  it("posts an orders successfully", async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve(order));
    await expect(postOrder(order)).resolves.toEqual(order);
  });

  it("posts an order with an error", async () => {
    axios.post.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(postOrder(order)).rejects.toThrow(errorMessage);
  });
});
