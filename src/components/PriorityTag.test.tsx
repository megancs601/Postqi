import { screen } from "@testing-library/react";
import { renderWithStore } from "../utils/TestUtils";
import PriorityTag from "./PriorityTag";

it("renders correct icon and label for high priority", () => {
  renderWithStore({
    ui: <PriorityTag priority={1} taskId="fakeTestId" columnId="fakeColId" />,
  });
  screen.getByLabelText(/high priority/i);

  const tag = screen.getByText("keyboard_double_arrow_up");
  expect(tag.className).toMatch(/text-red/i);
});

it("renders correct icon and label for medium priority", () => {
  renderWithStore({
    ui: <PriorityTag priority={2} taskId="fakeTestId" columnId="fakeColId" />,
  });
  screen.getByLabelText(/medium priority/i);

  const tag = screen.getByText("equal");
  expect(tag.className).toMatch(/text-yellow/i);
});

it("renders correct icon and label for low priority", () => {
  renderWithStore({
    ui: <PriorityTag priority={3} taskId="fakeTestId" columnId="fakeColId" />,
  });
  screen.getByLabelText(/low priority/i);

  const tag = screen.getByText("keyboard_arrow_down");
  expect(tag.className).toMatch(/text-blue/i);
});
