import OdersTable from "../OdersTable";
import { render } from "@testing-library/react";

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

it("renders table with correct data", () => {
  const table = render(<OdersTable orders={orders} />);
  // expect(table.getByText(orders[0].id)).toBeInTheDocument();
  const rows = table.getAllByTestId("row");
  expect(rows).toHaveLength(orders.length);
});
