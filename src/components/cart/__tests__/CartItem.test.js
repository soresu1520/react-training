import CartItem from "../CartItem";
import { fireEvent, render } from "@testing-library/react";

const deleteItem = jest.fn();
const changeQuantity = jest.fn();
const item = { productId: 2, name: "Pancakes", price: 5, image: "pancakes.png", quantity: 1 };

describe("quantity changes correctly", () => {
  it("quantity increased correctly", async () => {
    const cartItem = render(
      <CartItem cartItem={item} changeQuantity={changeQuantity} deleteItem={deleteItem} />
    );
    fireEvent.click(cartItem.getByTestId("addQuantity"));
    // expect(changeQuantity).toHaveBeenCalledTimes(1);
    const quantity = await cartItem.findByTestId("quantity");
    // expect(quantity).toHaveTextContent(`Quantity: ${item.quantity + 1}`);

    //sprawdź czy metoda jest wywołana z odpowiednimi argumentami
  });
});
