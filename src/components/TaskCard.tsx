import { Draggable } from "@hello-pangea/dnd";
import type { Task } from "../types/board";

interface TaskCardProps {
  task: Task;
  index: number;
}

export default function TaskCard({ task, index }: TaskCardProps) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ ...provided.draggableProps.style }}
          className="min-w-65 min-h-30 bg-slate-700 rounded-sm px-3 mb-2"
        >
          {task.content}
        </li>
      )}
    </Draggable>
  );
}
