type PriorityProp = {
  priority: number;
};

export default function PriorityTag({ priority }: PriorityProp) {
  const priorityMap: Record<
    number,
    { border: string; color: string; icon: string; label: string }
  > = {
    1: {
      border: "border-red-500",
      color: "text-red-500",
      icon: "keyboard_double_arrow_up",
      label: "High priority",
    },
    2: {
      border: "border-yellow-500",
      color: "text-yellow-500",
      icon: "equal",
      label: "Medium priority",
    },
    3: {
      border: "border-blue-400",
      color: "text-blue-500",
      icon: "keyboard_arrow_down",
      label: "Low priority",
    },
  };

  const { border, color, icon, label } = priorityMap[priority];

  return (
    <span
      className={`inline-flex items-center justify-center gap-1 !p-1 rounded-full border ${border}`}
      aria-label={`Currently ${label}`}
    >
      <span
        className={`material-symbols-outlined !${color}`}
        style={{ fontSize: "14px", fontWeight: 700 }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}
