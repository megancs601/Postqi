type DateProp = {
  date: string;
};

export default function DateTag({ date }: DateProp) {
  const parsedDate = new Date(date);
  const today = new Date();

  const isOverdue = parsedDate < today;
  const color = isOverdue ? "red" : "gray";
  const colorMap = {
    red: "bg-red-900 text-red-300",
    gray: "border border-gray-400 text-gray-300",
  };

  const mm = parsedDate.getMonth() + 1;
  const dd = parsedDate.getDate();
  const yyyy = parsedDate.getFullYear();
  const formatted = `${mm}/${dd}/${yyyy}`;

  return (
    <span
      className={`rounded-sm px-2 py-1 text-xs font-bold ${colorMap[color]}`}
    >
      {formatted}
    </span>
  );
}
