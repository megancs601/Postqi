type PriorityProp = {
  priority: number;
};

export default function PriorityTag({ priority }: PriorityProp) {
  const priorityMap: Record<number, { text: string; color: string }> = {
    1: { text: "High", color: "border border-red-500" },
    2: { text: "Medium", color: "border border-yellow-500" },
    3: { text: "Low", color: "border border-blue-400" },
  };

  const iconMap: Record<number, { icon: string; color: string }> = {
    1: {
      icon: "keyboard_arrow_up",
      color: "text-red-500",
    },
    2: { icon: "equal", color: "text-yellow-500" },
    3: {
      icon: "keyboard_arrow_down",
      color: "text-blue-500",
    },
  };

  return (
    <span
      className={`inline-flex items-center justify-center gap-1 !p-1 tag ${priorityMap[priority].color}`}
    >
      <span
        className={`material-symbols-outlined !${iconMap[priority].color}`}
        style={{ fontSize: "14px", fontWeight: 700 }}
      >
        {iconMap[priority].icon}
      </span>
      {/* {priorityMap[priority].text} */}
    </span>
  );
}
