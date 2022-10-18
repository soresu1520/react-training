import SnackbarMessage from "../SnackbarMessage";
import { render } from "@testing-library/react";
import SnackbarContext from "../../../context/SnackbarContext";

it("snackbar renders correctly", async () => {
  const snackbar = render(
    <SnackbarContext.Provider
      value={[{ open: true, message: "Snackbar test", type: "success" }, () => {}]}
    >
      <SnackbarMessage />
    </SnackbarContext.Provider>
  );

  const message = snackbar.getByText("Snackbar test");
  expect(message).toBeInTheDocument();
});
