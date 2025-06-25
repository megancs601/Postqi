import { screen } from "@testing-library/react";
import { renderWithStore } from "../utils/TestUtils";
import PriorityTag from "./PriorityTag";
import userEvent from "@testing-library/user-event";

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

it("opens the change task priority menu when the priorty icon is clicked", async () => {
  renderWithStore({
    ui: <PriorityTag priority={2} taskId="fakeTestId" columnId="fakeColId" />,
  });
  const user = userEvent.setup();
  await user.click(screen.getByLabelText(/medium priority/i));

  await screen.findByText(/change task priority/i);

  screen.getByRole("menuitem", { name: /high/i });
  screen.getByRole("menuitem", { name: /medium/i });
  screen.getByRole("menuitem", { name: /low/i });
});

it("renders correct priority icon when new priority  is selected", async () => {
  renderWithStore({
    ui: <PriorityTag priority={3} taskId="fakeTestId" columnId="fakeColId" />,
  });
  const user = userEvent.setup();
  await user.click(screen.getByLabelText(/low priority/i));

  await screen.findByText(/change task priority/i);
  await user.click(screen.getByRole("menuitem", { name: /high/i }));

  screen.findByLabelText(/high priority/i);
});
