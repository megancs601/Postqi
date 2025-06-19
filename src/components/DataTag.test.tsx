import { render, screen } from "@testing-library/react";
import DateTag from "./DateTag";

const fakeDate = "2022-10-31T00:00:00Z";

it("shows a formatted date", () => {
  render(<DateTag date={fakeDate} />);
  const time = screen.getByLabelText(/due/i);
  expect(time).toHaveTextContent("10/30/2022");
});

it("shows correct styles for overdue date", () => {
  render(<DateTag date={fakeDate} />);
  const time = screen.getByLabelText(/due/i);

  expect(time).toHaveClass(/bg-red/i);
});

it("shows correct styles for a future date", () => {
  render(<DateTag date="3000-03-10T00:00:00Z" />);
  const time = screen.getByLabelText(/due/i);

  expect(time).not.toHaveClass(/bg-red/i);
  expect(time).toHaveClass(/text-gray/i);
});
