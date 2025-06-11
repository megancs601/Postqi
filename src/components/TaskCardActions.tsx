import { Menu } from "@base-ui-components/react/menu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllColumns,
  getOtherColumnIds,
  getTaskLengthAtColumn,
  moveTask,
} from "../store/boardSlice";

interface TaskCardProps {
  index: number;
  columnId: string;
}

export default function TaskCardAction({ index, columnId }: TaskCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItemClass =
    "px-4 py-2 text-sm hover:bg-slate-700 cursor-pointer rounded-md";

  const dispatch = useDispatch();
  const board = useSelector(getAllColumns);
  const tasksCount = useSelector(getTaskLengthAtColumn(columnId));
  const availableColumns = useSelector(getOtherColumnIds(columnId));

  // move the task up(1) or down(-1) the current column
  const moveHandler = (direction: number) => {
    // dont go below 0, and don't go beyond current amount of tasks
    const newIndex = Math.max(0, Math.min(index + direction, tasksCount - 1));

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
    const newIndex = board[newColumnId].tasks.length ?? 0;

    dispatch(
      moveTask({
        sourceColId: columnId,
        destinationColId: newColumnId,
        sourceIndex: index,
        destinationIndex: newIndex,
      }),
    );
  };

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
                className={`${menuItemClass} data-[popup-open]:bg-slate-700`}
              >
                <div className="flex items-center justify-between ">
                  Move to column
                  <span
                    className="material-symbols-outlined h-5 mb-[-4px]"
                    style={{ fontSize: "18px" }}
                  >
                    chevron_right
                  </span>
                </div>
              </Menu.SubmenuTrigger>
              <Menu.Portal>
                <Menu.Positioner>
                  <Menu.Popup className="rounded-sm bg-gray-900 border border-slate-600 p-1 w-50">
                    {availableColumns.map((columnId) => (
                      <Menu.Item
                        key={columnId}
                        className={menuItemClass}
                        onClick={() => moveToColHandler(columnId)}
                      >
                        {board[columnId].title}
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
              Move up
            </Menu.Item>
            <Menu.Item className={menuItemClass} onClick={() => moveHandler(1)}>
              Move down
            </Menu.Item>
            <Menu.Item className={menuItemClass}>Archive</Menu.Item>
            <Menu.Item className={menuItemClass}>Delete</Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-gray-900"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="fill-slate-600 "
      />
    </svg>
  );
}
