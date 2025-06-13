import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import Column from "../components/Column";
import { getAllColumns, moveTask } from "../store/boardSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function KanbanBoard() {
  const columns = useAppSelector(getAllColumns);
  const dispatch = useAppDispatch();

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    dispatch(
      moveTask({
        sourceColId: source.droppableId,
        destinationColId: destination.droppableId,
        sourceIndex: source.index,
        destinationIndex: destination.index,
      }),
    );
  };

  return (
    <div className="flex-1 flex space-x-4 overflow-y-auto">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.values(columns).map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </DragDropContext>
    </div>
  );
}
