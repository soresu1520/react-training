import OrderSummary from "../OrderSummary";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

it("order summary", () => {
  const orderSummary = render(
    <BrowserRouter>
      <OrderSummary />
    </BrowserRouter>
  );
});
