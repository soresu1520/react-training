import renderer from "react-test-renderer";
import Footer from "../Footer";

it("footer renders correctly", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
