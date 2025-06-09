import type { Tag } from "../types/board";

type TagsProp = {
  tags: Tag[];
};

export default function GeneralTags({ tags }: TagsProp) {
  const colorMap: Record<string, string> = {
    pink: "text-pink-500",
    purple: "text-purple-500",
    cyan: "text-cyan-500",
    red: "text-red-500",
    blue: "text-blue-500",
    yellow: "text-yellow-500",
    gray: "text-gray-500",
    indigo: "text-indigo-500",
    green: "text-green-500",
  };

  return (
    <div>
      {tags.map((tag) => (
        <span className={`tag ${colorMap[tag.color]}`}>{tag.title}</span>
      ))}
    </div>
  );
}
