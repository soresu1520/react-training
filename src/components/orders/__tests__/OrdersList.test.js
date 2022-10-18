import OrdersList from "../OrdersList";
import { render, waitFor } from "@testing-library/react";
import { fetchOrders } from "../../../server/fetch";

jest.mock("../../../server/fetch", () => ({
  ...jest.requireActual("../../../server/fetch"),
  fetchOrders: jest.fn(),
}));

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
];

describe("render list of orders", () => {
  it("renders component with no orders", async () => {
    fetchOrders.mockResolvedValueOnce({ orders: [], message: "" });
    const ordersList = render(<OrdersList />);

    expect(ordersList.getByTestId("orders-loading")).toBeTruthy();

    expect(fetchOrders).toHaveBeenCalledTimes(1);
    expect(fetchOrders).toHaveBeenCalledWith();

    await waitFor(() => expect(ordersList.getByTestId("no-orders")).toBeTruthy());
  });

  it("renders component with orders", async () => {
    fetchOrders.mockResolvedValueOnce({ orders: orders, message: "" });
    const ordersList = render(<OrdersList />);

    expect(ordersList.getByTestId("orders-loading")).toBeTruthy();

    expect(fetchOrders).toHaveBeenCalledTimes(1);
    expect(fetchOrders).toHaveBeenCalledWith();

    await waitFor(() => expect(ordersList.queryByTestId("orders-table")).toBeTruthy());
  });
});
