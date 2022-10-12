import { render } from "@testing-library/react";
import App from "./App";

test("App exists", () => {
  const app = render(<App />);
  expect(app).toBeTruthy();
});
