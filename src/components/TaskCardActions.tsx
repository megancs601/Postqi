import { Menu } from "@base-ui-components/react/menu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveTask } from "../store/boardSlice";
import type { RootState } from "../store";

interface TaskCardProps {
  index: number;
  columnId: string;
}

export default function TaskCardAction({ index, columnId }: TaskCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItemClass = "px-4 py-2 text-sm hover:bg-slate-700 cursor-pointer";

  const dispatch = useDispatch();
  const tasksCount = useSelector(
    (state: RootState) => state.board[columnId].tasks.length ?? 0,
  );

  const moveHandler = (value: number) => {
    // dont go below 0, and don't go beyond current amount of tasks
    const newIndex = Math.max(0, Math.min(index + value, tasksCount - 1));

    dispatch(
      moveTask({
        sourceColId: columnId,
        destinationColId: columnId,
        sourceIndex: index,
        destinationIndex: newIndex,
      }),
    );
  };

  // TODO: add icons to list items
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
          <Menu.Popup className="rounded-sm bg-gray-900 border border-slate-600 py-4 w-50">
            <Menu.Arrow id="tooltip-arrow">
              <ArrowSvg />
            </Menu.Arrow>
            <div className="flex items-center justify-between px-4 pb-2 ">
              <h2 className="text-sm text-slate-200 font-semibold text-center">
                Task Actions
              </h2>
              <span
                className="material-symbols-outlined cursor-pointer text-slate-400 hover:text-slate-200"
                style={{ fontSize: "14px", fontWeight: 700 }}
                onClick={() => setIsOpen(false)}
              >
                close
              </span>
            </div>
            <Menu.Item className={menuItemClass}>Move To...</Menu.Item>
            <Menu.Item
              className={menuItemClass}
              onClick={() => moveHandler(-1)}
            >
              Move Up
            </Menu.Item>
            <Menu.Item className={menuItemClass} onClick={() => moveHandler(1)}>
              Move Down
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
