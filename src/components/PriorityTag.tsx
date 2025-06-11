type PriorityProp = {
  priority: number;
};

export default function PriorityTag({ priority }: PriorityProp) {
  const priorityMap: Record<
    number,
    { border: string; color: string; icon: string }
  > = {
    1: {
      border: "border border-red-500",
      color: "text-red-500",
      icon: "keyboard_double_arrow_up",
    },
    2: {
      border: "border border-yellow-500",
      color: "text-yellow-500",
      icon: "equal",
    },
    3: {
      border: "border border-blue-400",
      color: "text-blue-500",
      icon: "keyboard_arrow_down",
    },
  };

  return (
    <span
      className={`inline-flex items-center justify-center gap-1 !p-1 rounded-full ${priorityMap[priority].border}`}
    >
      <span
        className={`material-symbols-outlined !${priorityMap[priority].color}`}
        style={{ fontSize: "14px", fontWeight: 700 }}
      >
        {priorityMap[priority].icon}
      </span>
    </span>
  );
}
