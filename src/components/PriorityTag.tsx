type PriorityProp = {
  priority: number;
};

export default function PriorityTag({ priority }: PriorityProp) {
  const priorityMap: Record<number, { text: string; color: string }> = {
    1: { text: "High", color: "bg-red-900 text-red-300" },
    2: { text: "Medium", color: "bg-yellow-900 text-yellow-300" },
    3: { text: "Low", color: "border border-blue-400 text-blue-300" },
  };

  return (
    <span
      className={`rounded-sm px-2 py-1 text-xs font-bold ${priorityMap[priority].color}`}
    >
      {priorityMap[priority].text}
    </span>
  );
}
