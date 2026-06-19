import { render, screen, fireEvent } from "@testing-library/react";
import Checkout from "../pages/Checkout";

test("checkout form works", () => {

  render(<Checkout />);

  const input = screen.getByPlaceholderText("Name");
  const button = screen.getByText("Place Order");

  fireEvent.change(input, {
    target: { value: "John" }
  });

  fireEvent.click(button);

  expect(
    screen.queryByText("Name must be 3 characters")
  ).toBeNull();
});