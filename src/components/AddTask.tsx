import { useAppDispatch } from "../store/hooks";
import { addTask } from "../store/slices/boardSlice";

interface AddTaskProps {
  columnId: string;
}

export default function AddTask({ columnId }: AddTaskProps) {
  const dispatch = useAppDispatch();

  // TODO: remove when user can add there own task data
  const id = Date.now();
  const task = {
    id: `task-${id}`,
    content: `Task random ${id}`,
    date: "2022-10-31T00:00:00Z",
    priority: 3,
    tags: [{ title: "home", color: "pink" }],
  };

  const addTaskHandler = () => {
    dispatch(addTask({ columnId, task }));
  };

  return (
    <button
      className="hover:cursor-pointer hover:bg-slate-700 px-1 h-6 rounded-sm"
      onClick={addTaskHandler}
    >
      <span className="material-symbols-outlined  text-slate-300">add</span>
    </button>
  );
}
