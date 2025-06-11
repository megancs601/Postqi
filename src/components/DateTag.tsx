type DateProp = {
  date: string;
};

export default function DateTag({ date }: DateProp) {
  const parsedDate = new Date(date);
  const today = new Date();

  const isOverdue = parsedDate < today;
  const color = isOverdue ? "red" : "gray";
  const colorMap = {
    red: "bg-red-700 ",
    gray: "text-gray-300",
  };

  const mm = parsedDate.getMonth() + 1;
  const dd = parsedDate.getDate();
  const yyyy = parsedDate.getFullYear();
  const formatted = `${mm}/${dd}/${yyyy}`;

  return <span className={`tag ${colorMap[color]}`}>{formatted}</span>;
}
