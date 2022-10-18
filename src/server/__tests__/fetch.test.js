import { fetchOrders } from "../fetch";
import { getOrders } from "../API";
import { sortDates } from "../../utils/sort";

jest.mock("../API", () => ({
  ...jest.requireActual("../API"),
  getOrders: jest.fn(),
}));

jest.mock("../../utils/sort", () => ({
  ...jest.requireActual("../../utils/sort"),
  sortDates: jest.fn(),
}));

const response = {
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

describe("fetch orders", () => {
  test("fetch orders calls API", async () => {
    getOrders.mockResolvedValueOnce(response);
    await fetchOrders();
    expect(getOrders).toBeCalledTimes(1);
  });

  test("fetch orders throws error", async () => {
    getOrders.mockRejectedValue("Error");
    const fetchedData = await fetchOrders();
    expect(fetchedData).toEqual({ orders: [], message: "Error. Try again" });
  });
});
