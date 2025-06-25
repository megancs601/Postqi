import { Menu } from "@base-ui-components/react/menu";
import { useState } from "react";
import {
  deleteTask,
  getAllColumns,
  getAllColumnsExcept,
  getAllTasksAtColumnId,
  moveTask,
} from "../store/slices/boardSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import ArrowSvg from "./ArrowSvg";

interface TaskCardProps {
  index: number;
  columnId: string;
  taskId: string;
}

export default function TaskCardAction({
  index,
  columnId,
  taskId,
}: TaskCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItemClass =
    "px-4 py-2 text-sm hover:bg-slate-700 cursor-pointer rounded-md flex items-center";

  const dispatch = useAppDispatch();
  const columns = useAppSelector(getAllColumns);
  const tasksCount = useAppSelector(getAllTasksAtColumnId(columnId));
  const availableColumns = useAppSelector((state) =>
    getAllColumnsExcept(state, columnId),
  );

  // move the task up(1) or down(-1) the current column
  const moveHandler = (direction: number) => {
    // dont go below 0, and don't go beyond current amount of tasks
    const newIndex = Math.max(
      0,
      Math.min(index + direction, tasksCount.length),
    );

    dispatch(
      moveTask({
        sourceColId: columnId,
        destinationColId: columnId,
        sourceIndex: index,
        destinationIndex: newIndex,
      }),
    );
  };

  // move to new column at the last position
  const moveToColHandler = (newColumnId: string) => {
    const newColumn = columns.find((col) => col.id === newColumnId);
    const newIndex = newColumn?.tasks.length ?? 0;

    dispatch(
      moveTask({
        sourceColId: columnId,
        destinationColId: newColumnId,
        sourceIndex: index,
        destinationIndex: newIndex,
      }),
    );
  };

  const deleteHandler = () => {
    dispatch(deleteTask({ columnId, taskId }));
  };

  // TODO: implement archive, confirm delete task with dialog
  // DECIDE: should archive and delete both be in the same menu?
  return (
    <Menu.Root onOpenChange={(open) => setIsOpen(open)}>
      <Menu.Trigger>
        <span
          className={`material-symbols-outlined rounded-full ${isOpen ? "bg-slate-900" : "hover:bg-slate-900"}`}
        >
          more_horiz
        </span>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner sideOffset={0}>
          <Menu.Popup className="rounded-sm bg-gray-900 border border-slate-600 pt-4 pb-2 px-1 w-48">
            <Menu.Arrow id="tooltip-arrow">
              <ArrowSvg />
            </Menu.Arrow>
            <h2 className="text-sm text-slate-200 font-semibold text-center mb-1">
              Task Actions
            </h2>
            {/* Submenu */}
            <Menu.Root>
              <Menu.SubmenuTrigger
                className={`${menuItemClass} data-[popup-open]:bg-slate-700 justify-between pl-[42px]`}
              >
                Change status
                <span
                  className="material-symbols-outlined h-5 "
                  style={{ fontSize: "22px" }}
                >
                  chevron_right
                </span>
              </Menu.SubmenuTrigger>
              <Menu.Portal>
                <Menu.Positioner>
                  <Menu.Popup className="rounded-sm bg-gray-900 border border-slate-600 p-1 w-50">
                    {availableColumns.map((col) => (
                      <Menu.Item
                        key={col.id}
                        className={menuItemClass}
                        onClick={() => moveToColHandler(col.id)}
                      >
                        {col.title}
                      </Menu.Item>
                    ))}
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.Root>
            {/* End of Submenu */}
            <Menu.Item
              className={menuItemClass}
              onClick={() => moveHandler(-1)}
            >
              <span
                className="material-symbols-outlined h-5 mb-[-4px] mr-2"
                style={{ fontSize: "18px" }}
              >
                arrow_upward
              </span>
              Move up
            </Menu.Item>
            <Menu.Item className={menuItemClass} onClick={() => moveHandler(1)}>
              <span
                className="material-symbols-outlined h-5 mb-[-4px] mr-2"
                style={{ fontSize: "18px" }}
              >
                arrow_downward
              </span>
              Move down
            </Menu.Item>
            <Menu.Item className={menuItemClass} onClick={deleteHandler}>
              <span
                className="material-symbols-outlined h-5 mb-[-4px] mr-2"
                style={{ fontSize: "18px" }}
              >
                delete
              </span>
              Delete
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
