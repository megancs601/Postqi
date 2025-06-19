import { render, screen } from "@testing-library/react";
import PriorityTag from "./PriorityTag";

it("renders correct icon and label for high priority", () => {
  render(<PriorityTag priority={1} />);
  screen.getByLabelText(/high priority/i);

  const tag = screen.getByText("keyboard_double_arrow_up");
  expect(tag.className).toMatch(/text-red/i);
});

it("renders correct icon and label for medium priority", () => {
  render(<PriorityTag priority={2} />);
  screen.getByLabelText(/medium priority/i);

  const tag = screen.getByText("equal");
  expect(tag.className).toMatch(/text-yellow/i);
});

it("renders correct icon and label for low priority", () => {
  render(<PriorityTag priority={3} />);
  screen.getByLabelText(/low priority/i);

  const tag = screen.getByText("keyboard_arrow_down");
  expect(tag.className).toMatch(/text-blue/i);
});
