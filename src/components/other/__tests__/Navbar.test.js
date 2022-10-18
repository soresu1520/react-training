import Navbar from "../Navbar";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

it("click on logo", async () => {
  const navbar = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const logoClick = await navbar.findByTestId(`click-logo`);

  fireEvent.click(logoClick);
  expect(global.window.location.pathname).toContain("/");
});
