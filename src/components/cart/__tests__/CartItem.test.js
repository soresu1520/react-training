import CartItem from "../CartItem";
import { fireEvent, getByText, render } from "@testing-library/react";

const deleteItem = jest.fn();
const addQuantity = jest.fn();
const subtractQuantity = jest.fn();
const item = { productId: 2, name: "Pancakes", price: 5, image: "pancakes.png", quantity: 2 };

it("cart item renders with correct data", () => {
  const cartItem = render(
    <CartItem
      cartItem={item}
      deleteItem={deleteItem}
      addQuantity={addQuantity}
      subtractQuantity={subtractQuantity}
    />
  );
  expect(cartItem.getByText(item.name)).toBeInTheDocument();
});

describe("change quantity", () => {
  it("add quantity", async () => {
    const cartItem = render(
      <CartItem
        cartItem={item}
        deleteItem={deleteItem}
        addQuantity={addQuantity}
        subtractQuantity={subtractQuantity}
      />
    );
    fireEvent.click(cartItem.getByTestId("addQuantity"));
    expect(addQuantity).toHaveBeenCalledTimes(1);
    expect(addQuantity).toHaveBeenCalledWith(item.productId);
  });

  it("subtract quantity", async () => {
    const cartItem = render(
      <CartItem
        cartItem={item}
        deleteItem={deleteItem}
        addQuantity={addQuantity}
        subtractQuantity={subtractQuantity}
      />
    );
    fireEvent.click(cartItem.getByTestId("subQuantity"));
    expect(subtractQuantity).toHaveBeenCalledTimes(1);
    expect(subtractQuantity).toHaveBeenCalledWith(item.productId);
  });

  it("delete item", async () => {
    const cartItem = render(
      <CartItem
        cartItem={item}
        deleteItem={deleteItem}
        addQuantity={addQuantity}
        subtractQuantity={subtractQuantity}
      />
    );
    fireEvent.click(cartItem.getByTestId("delete"));
    expect(deleteItem).toHaveBeenCalledTimes(1);
    expect(deleteItem).toHaveBeenCalledWith(item.productId);
  });
});
