import { Droppable } from "@hello-pangea/dnd";
import type { Column } from "../types/board";
import TaskCard from "./TaskCard";

interface ColumnProps {
  column: Column;
}

export default function Column({ column }: ColumnProps) {
  return (
    <div className="h-screen flex flex-col bg-slate-900 border border-slate-700 p-3 rounded-sm">
      <div className="flex flex-row justify-between">
        <h2 className="text-slate-300 h-min">{column.title}</h2>
        {column.id === "todo" && (
          <button className="hover:cursor-pointer hover:bg-slate-700 px-1 h-6 rounded-sm">
            <span className="material-symbols-outlined  text-slate-300">
              add
            </span>
          </button>
        )}
      </div>
      <hr className={`border-1 ${column.color} mt-1  mb-3 `} />

      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="min-w-72 flex-1 overflow-y-auto"
          >
            <div className="grid grid-cols-1">
              {column.tasks.map((task, index) => (
                <TaskCard key={task.id} task={task} index={index} />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
