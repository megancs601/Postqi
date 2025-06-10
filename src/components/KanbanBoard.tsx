import { useState } from "react";
import type { ColumnState } from "../types/board";
import { initialData } from "../data/initialState";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import Column from "../components/Column";

export default function KanbanBoard() {
  const [columns, setColumns] = useState<ColumnState>(initialData);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    // if no new destination, return early
    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const sourceTasks = [...sourceCol.tasks];
    const [movedTask] = sourceTasks.splice(source.index, 1);

    // if same column, get selected task and move it to new index of same column, update data
    if (source.droppableId == destination.droppableId) {
      sourceTasks.splice(destination.index, 0, movedTask);
      setColumns({
        ...columns,
        [sourceCol.id]: { ...sourceCol, tasks: sourceTasks },
      });

      return;
    }

    // else get new column id, and insert selected task at new index, update data
    const destinationCol = columns[destination.droppableId];
    const destinationTasks = [...destinationCol.tasks];

    destinationTasks.splice(destination.index, 0, movedTask);
    setColumns({
      ...columns,
      [sourceCol.id]: { ...sourceCol, tasks: sourceTasks },
      [destinationCol.id]: { ...destinationCol, tasks: destinationTasks },
    });
  };

  return (
    <div className="flex-1 flex space-x-4 overflow-y-auto">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([_, column]) => (
          <Column key={column.id} column={column} />
        ))}
      </DragDropContext>
    </div>
  );
}
