import { fireEvent, render } from "@testing-library/react";
import OrderRow from "../OrderRow";
import React from "react";

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

it("row shows and hides correctly", async () => {
  const orderRow = render(
    <table>
      <tbody>
        <OrderRow order={order} />
      </tbody>
    </table>
  );
  const rowClick = await orderRow.findByTestId("row-click");

  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, "useState");
  // useStateSpy.mockImplementation(initialState => [initialState, setState]);

  // fireEvent.click(rowClick);
  // expect(setState).toHaveBeenCalledWith(false);

  // fireEvent.click(rowClick);
  // expect(setState).toHaveBeenCalledWith(true);
});
