import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { MemoryRouter } from "react-router";

// it("ahh", () => expect(true));
it("renders error message", () => {
  render(
    <MemoryRouter>
      <NotFound isAuthenticated={true} />
    </MemoryRouter>,
  );

  screen.getByText(/404/i);
  screen.getByRole("heading", { name: /page not found/i });
  screen.getByText(/we couldn’t find the page/i);
});

it("has a link to login page when not authenticated", () => {
  render(
    <MemoryRouter>
      <NotFound isAuthenticated={false} />
    </MemoryRouter>,
  );
  const link = screen.getByRole("link", { name: /login page/i });
  expect(link).toHaveAttribute("href", "/login");
});

it("has a link to dashboard page when authenticated", () => {
  render(
    <MemoryRouter>
      <NotFound isAuthenticated={true} />
    </MemoryRouter>,
  );
  const link = screen.getByRole("link", { name: /dashboard page/i });
  expect(link).toHaveAttribute("href", "/dashboard");
});
