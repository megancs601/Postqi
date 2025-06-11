import { Droppable } from "@hello-pangea/dnd";
import type { Column } from "../types/board";
import TaskCard from "./TaskCard";

interface ColumnProps {
  column: Column;
}

export default function Column({ column }: ColumnProps) {
  return (
    <section
      aria-labelledby={`column-title-${column.id}`}
      className="h-full flex flex-col bg-slate-900 border border-slate-700 p-3 rounded-sm"
    >
      <div className="flex flex-row justify-between">
        <h2 id={`column-title-${column.id}`} className="mb-1">
          {column.title}
        </h2>

        <button className="hover:cursor-pointer hover:bg-slate-700 px-1 h-6 rounded-sm">
          <span className="material-symbols-outlined  text-slate-300">add</span>
        </button>
      </div>
      <hr className={`border-1 ${column.color} mb-3`} />
      <Droppable droppableId={column.id}>
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            aria-labelledby={`column-title-${column.id}`}
            className="min-w-72 flex-1 overflow-y-auto p-1"
          >
            {column.tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                columnId={column.id}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </section>
  );
}
