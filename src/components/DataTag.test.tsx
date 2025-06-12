import { render, screen } from "@testing-library/react";
import DateTag from "./DateTag";

const fakeDate = "2022-10-31T00:00:00Z";

it("shows a formatted date", () => {
  render(<DateTag date={fakeDate} />);
  const time = screen.getByLabelText(/due/i);
  expect(time).toHaveTextContent("10/30/2022");
});
