import renderer from "react-test-renderer";
import SummaryItem from "../SummaryItem";

const cartItem = { productId: 2, name: "Pancakes", price: 5, image: "pancakes.png", quantity: 1 };

it("summary item renders correctly", () => {
  const tree = renderer.create(<SummaryItem cartItem={{ cartItem }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
