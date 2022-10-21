import OrderSummary from "../OrderSummary";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SnackbarContext from "../../../context/SnackbarContext";
import { postOrder } from "../../../server/API";
import userEvent from "@testing-library/user-event";

jest.mock("../../../server/API", () => ({
  ...jest.requireActual("../../../server/API"),
  postOrder: jest.fn(),
}));

let store = {};

const cart = [
  { productId: 1, name: "Salad", price: 5, image: "salad.png", quantity: 4 },
  { productId: 2, name: "Pancakes", price: 5, image: "pancakes.png", quantity: 1 },
];

const localStorageMock = (function () {
  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    removeItem(key) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

beforeEach(() => {
  store = {
    cart: JSON.stringify(cart),
  };
});

describe("summary rendered with correct data", () => {
  it("summary rendered with empty cart", () => {
    localStorage.setItem("cart", JSON.stringify([]));
    const orderSummary = render(
      <SnackbarContext.Provider value={[{ open: false, message: "", type: "" }, () => {}]}>
        <BrowserRouter>
          <OrderSummary />
        </BrowserRouter>
      </SnackbarContext.Provider>
    );

    expect(orderSummary.getByText("Cart is empty")).toBeInTheDocument();
  });

  it("summary rendered with items in cart", () => {
    const orderSummary = render(
      <SnackbarContext.Provider value={[{ open: false, message: "", type: "" }, () => {}]}>
        <BrowserRouter>
          <OrderSummary />
        </BrowserRouter>
      </SnackbarContext.Provider>
    );

    expect(orderSummary.getAllByTestId("summary-item")).toHaveLength(cart.length);
  });
});

it("order was placed", async () => {
  const orderSummary = render(
    <SnackbarContext.Provider value={[{ open: false, message: "", type: "" }, () => {}]}>
      <BrowserRouter>
        <OrderSummary />
      </BrowserRouter>
    </SnackbarContext.Provider>
  );

  const submitButton = orderSummary.getByTestId("submit");

  const firstNameInput = orderSummary.getByTestId("first-name").querySelector("input");
  const lastNameInput = orderSummary.getByTestId("last-name").querySelector("input");
  const streetInput = orderSummary.getByRole("textbox", { name: /street/i });
  const buildingInput = orderSummary.getByRole("textbox", { name: /building/i });
  const cityInput = orderSummary.getByRole("textbox", { name: /city/i });
  const zipInput = orderSummary.getByRole("textbox", { name: /zip/i });
  const emailInput = orderSummary.getByTestId("email").querySelector("input");

  userEvent.type(firstNameInput, "Anna");
  userEvent.type(lastNameInput, "Kowalska");
  userEvent.type(streetInput, "Kwiatowa");
  userEvent.type(buildingInput, "23");
  userEvent.type(cityInput, "Wroclaw");
  userEvent.type(zipInput, "55-555");
  userEvent.type(emailInput, "mm@mm.com");

  fireEvent.click(submitButton);
});
