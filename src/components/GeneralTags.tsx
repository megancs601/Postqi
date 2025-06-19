import type { Tag } from "../types/board";

type TagsProp = {
  tags: Tag[];
};

export default function GeneralTags({ tags }: TagsProp) {
  const colorMap: Record<string, string> = {
    pink: "bg-pink-500",
    purple: "bg-purple-500",
    cyan: "bg-cyan-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    gray: "bg-gray-500",
    indigo: "bg-indigo-500",
    green: "bg-green-500",
    violet: "bg-violet-700",
    lime: "bg-lime-500",
    fuchsia: "bg-fuchsia-500",
  };

  return (
    <ul
      className="list-none p-0 m-0 inline-flex items-center justify-start space-x-2"
      aria-label="Tags"
    >
      {tags.map((tag) => (
        <li key={tag.title} className={`tag ${colorMap[tag.color]}`}>
          {tag.title}
        </li>
      ))}
    </ul>
  );
}
