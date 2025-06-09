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
  };

  return (
    <div className="space-x-2">
      {tags.map((tag) => (
        <span className={`tag ${colorMap[tag.color]}`}>{tag.title}</span>
      ))}
    </div>
  );
}
