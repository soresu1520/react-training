import { render, fireEvent, screen } from "@testing-library/react";
import ShoppingCart from "../ShoppingCart";
import { BrowserRouter } from "react-router-dom";
import SnackbarContext from "../../../context/SnackbarContext";

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
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

beforeEach(() => {
  store = {
    cart: JSON.stringify(cart),
  };
});

describe("render cart with correct data", () => {
  it("shopping cart is empty", () => {
    localStorage.setItem("cart", JSON.stringify([]));
    const shoppingCart = render(
      <SnackbarContext.Provider value={[{ open: false, message: "", type: "" }, () => {}]}>
        <BrowserRouter>
          <ShoppingCart />
        </BrowserRouter>
      </SnackbarContext.Provider>
    );

    expect(shoppingCart.getByText("Cart is empty")).toBeInTheDocument();
  });

  it("cart renders with correct data", () => {
    const shoppingCart = render(
      <SnackbarContext.Provider value={[{ open: false, message: "", type: "" }, () => {}]}>
        <BrowserRouter>
          <ShoppingCart />
        </BrowserRouter>
      </SnackbarContext.Provider>
    );

    expect(shoppingCart.getAllByTestId("cart-item")).toHaveLength(cart.length);
  });
});

describe("change quantity", () => {
  it("added item", () => {
    const shoppingCart = render(
      <SnackbarContext.Provider value={[{ open: false, message: "", type: "" }, () => {}]}>
        <BrowserRouter>
          <ShoppingCart />
        </BrowserRouter>
      </SnackbarContext.Provider>
    );

    fireEvent.click(shoppingCart.getByTestId(`add-${cart[1].productId}`));
    expect(shoppingCart.getByTestId(`quantity-${cart[1].productId}`)).toHaveTextContent(
      cart[1].quantity + 1
    );
  });

  it("subtracted item", () => {
    const shoppingCart = render(
      <SnackbarContext.Provider value={[{ open: false, message: "", type: "" }, () => {}]}>
        <BrowserRouter>
          <ShoppingCart />
        </BrowserRouter>
      </SnackbarContext.Provider>
    );

    fireEvent.click(shoppingCart.getByTestId(`sub-${cart[0].productId}`));
    expect(shoppingCart.getByTestId(`quantity-${cart[0].productId}`)).toHaveTextContent(
      cart[0].quantity - 1
    );
  });

  it("subtracted item with quantity of 1", () => {
    const shoppingCart = render(
      <SnackbarContext.Provider value={[{ open: false, message: "", type: "" }, () => {}]}>
        <BrowserRouter>
          <ShoppingCart />
        </BrowserRouter>
      </SnackbarContext.Provider>
    );

    fireEvent.click(shoppingCart.getByTestId(`sub-${cart[1].productId}`));
    expect(shoppingCart.getAllByTestId("cart-item")).toHaveLength(cart.length - 1);
  });
});

it("deleted item", () => {
  const shoppingCart = render(
    <SnackbarContext.Provider value={[{ open: false, message: "", type: "" }, () => {}]}>
      <BrowserRouter>
        <ShoppingCart />
      </BrowserRouter>
    </SnackbarContext.Provider>
  );

  fireEvent.click(shoppingCart.getByTestId(`delete-${cart[0].productId}`));
  expect(shoppingCart.getAllByTestId("cart-item")).toHaveLength(cart.length - 1);
});
