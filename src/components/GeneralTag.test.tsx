import { render, screen } from "@testing-library/react";
import GeneralTags from "./GeneralTags";

const fakeTags = [
  { title: "tag1", color: "pink" },
  { title: "tag2", color: "blue" },
];

it("renders tags ", () => {
  render(<GeneralTags tags={fakeTags} />);

  screen.getByRole("list", { name: "Tags" });

  fakeTags.forEach((tag) => {
    const item = screen.getByText(tag.title);
    expect(item.className).toMatch(tag.color);
  });
});
