import SummaryForm from "../SummaryForm";
import { render, fireEvent, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const handlePayment = jest.fn();
const onSubmit = jest.fn();

describe("form validation", () => {
  it("all required fields are empty", async () => {
    const summaryForm = render(
      <SummaryForm handlePayment={handlePayment} payment="PayPal" onSubmit={onSubmit} />
    );
    const submitButton = summaryForm.getByTestId("submit");

    fireEvent.click(submitButton);

    const required = await summaryForm.findAllByText("This field is required");
    expect(required).toHaveLength(7);
  });

  it("invalid zip code", async () => {
    const summaryForm = render(
      <SummaryForm handlePayment={handlePayment} payment="PayPal" onSubmit={onSubmit} />
    );
    const submitButton = summaryForm.getByTestId("submit");
    const zipInput = summaryForm.getByRole("textbox", { name: /zip/i });

    userEvent.type(zipInput, "333");
    fireEvent.click(submitButton);
    const utils = within(summaryForm.getByTestId("zipcode"));

    const zip = await utils.findByText("Invalid ZIP code");
    expect(zipInput).toBeInTheDocument();
  });

  it("invalid phone number", async () => {
    const summaryForm = render(
      <SummaryForm handlePayment={handlePayment} payment="PayPal" onSubmit={onSubmit} />
    );
    const submitButton = summaryForm.getByTestId("submit");
    const phoneInput = summaryForm.getByRole("textbox", { name: /phone/i });

    userEvent.type(phoneInput, "333");
    fireEvent.click(submitButton);
    const utils = within(summaryForm.getByTestId("phone"));

    const phone = await utils.findByText("Invalid phone number");
    expect(phone).toBeInTheDocument();
  });

  it("invalid e-mail", async () => {
    const summaryForm = render(
      <SummaryForm handlePayment={handlePayment} payment="PayPal" onSubmit={onSubmit} />
    );
    const submitButton = summaryForm.getByTestId("submit");

    const emailInput = summaryForm.getByTestId("email").querySelector("input");
    expect(emailInput).toBeInTheDocument();

    userEvent.type(emailInput, "333");
    fireEvent.click(submitButton);
    const utils = within(summaryForm.getByTestId("email"));

    const email = await utils.findByText("Invalid e-mail");
    expect(email).toBeInTheDocument();
  });

  it("no messages about invalid input", async () => {
    const summaryForm = render(
      <SummaryForm handlePayment={handlePayment} payment="PayPal" onSubmit={onSubmit} />
    );
    const submitButton = summaryForm.getByTestId("submit");

    const firstNameInput = summaryForm.getByTestId("first-name").querySelector("input");
    const lastNameInput = summaryForm.getByTestId("last-name").querySelector("input");
    const streetInput = summaryForm.getByRole("textbox", { name: /street/i });
    const buildingInput = summaryForm.getByRole("textbox", { name: /building/i });
    const cityInput = summaryForm.getByRole("textbox", { name: /city/i });
    const zipInput = summaryForm.getByRole("textbox", { name: /zip/i });
    const emailInput = summaryForm.getByTestId("email").querySelector("input");

    userEvent.type(firstNameInput, "Anna");
    userEvent.type(lastNameInput, "Kowalska");
    userEvent.type(streetInput, "Kwiatowa");
    userEvent.type(buildingInput, "23");
    userEvent.type(cityInput, "Wroclaw");
    userEvent.type(zipInput, "55-555");
    userEvent.type(emailInput, "mm@mm.com");

    fireEvent.click(submitButton);

    const required = summaryForm.queryAllByText("This field is required");
    expect(required).toHaveLength(0);

    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
