import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import SummaryPrice from "../SummaryPrice";

const price = 7;
const deliveryPrice = 2;

it("summary price renders correctly", () => {
  const tree = renderer
    .create(<SummaryPrice price={price} deliveryPrice={deliveryPrice} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("total price is a sum of price and delivery price", async () => {
  const summaryPrice = render(<SummaryPrice price={price} deliveryPrice={deliveryPrice} />);
  const totalPrice = await summaryPrice.findByTestId("totalPrice");
  expect(totalPrice).toHaveTextContent(`${(price + deliveryPrice).toFixed(2)} $`);
});
