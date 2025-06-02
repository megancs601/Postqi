import { useState } from "react";
import type { ColumnState } from "../types/board";
import { initialData } from "../data/initialState";
import { DragDropContext } from "@hello-pangea/dnd";
import Column from "../components/Column";

export default function Dashboard() {
  const [columns, setColumns] = useState<ColumnState>(initialData);

  console.log(columns);

  const onDragEnd = () => {
    console.log("on drag end");
  };

  return (
    <div className="min-h-full m-auto flex space-x-4 justify-center">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([_, column]) => (
          <Column key={column.id} column={column} />
        ))}
      </DragDropContext>
    </div>
  );
}
