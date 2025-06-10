import { Draggable } from "@hello-pangea/dnd";
import type { Task } from "../types/board";
import DateTag from "./DateTag";
import PriorityTag from "./PriorityTag";
import GeneralTags from "./GeneralTags";
import TaskCardAction from "./TaskCardActions";

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
          className="min-w-65 min-h-30 bg-slate-700 rounded-sm px-3 mb-2 grid"
        >
          <div className="flex items-center justify-between space-x-1">
            {task.content}
            <TaskCardAction />
          </div>
          <GeneralTags tags={task.tags} />
          <div className="inline-flex items-center justify-end space-x-2">
            <PriorityTag priority={task.priority} />
            <DateTag date={task.date} />
          </div>
        </li>
      )}
    </Draggable>
  );
}
