import { useState } from "react";
import { Menu } from "@base-ui-components/react/menu";
import ArrowSvg from "./ArrowSvg";
import { useAppDispatch } from "../store/hooks";
import { changeTaskPriority } from "../store/slices/boardSlice";

type PriorityProp = {
  priority: number;
  taskId: string;
  columnId: string;
};

export type PriorityLevel = number;
export type PriorityInfo = {
  border: string;
  color: string;
  icon: string;
  label: string;
};

export default function PriorityTag({
  taskId,
  priority,
  columnId,
}: PriorityProp) {
  const priorityMap: Record<PriorityLevel, PriorityInfo> = {
    1: {
      border: "border-red-500",
      color: "text-red-500",
      icon: "keyboard_double_arrow_up",
      label: "high",
    },
    2: {
      border: "border-yellow-500",
      color: "text-yellow-500",
      icon: "equal",
      label: "medium",
    },
    3: {
      border: "border-blue-400",
      color: "text-blue-500",
      icon: "keyboard_arrow_down",
      label: "low",
    },
  };
  const { border, color, icon, label } = priorityMap[priority];
  const menuItemClass =
    "px-4 py-2 text-sm hover:bg-slate-700 cursor-pointer rounded-md flex items-center";

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const changePriorityHandler = (newPriority: number) => {
    // dont do anything if new priority is same as current priority
    if (priority === newPriority) {
      return;
    }

    dispatch(
      changeTaskPriority({
        taskId,
        newPriority,
        columnId,
      }),
    );
  };

  return (
    <Menu.Root onOpenChange={(open) => setIsOpen(open)}>
      <Menu.Trigger>
        <span
          className={`inline-flex items-center justify-center !p-1 rounded-full border ${border} ${isOpen ? "bg-slate-900" : "hover:bg-slate-900"}`}
          aria-label={`Currently ${label} priority`}
        >
          <span
            className={`material-symbols-outlined !${color}`}
            style={{ fontSize: "14px", fontWeight: 700 }}
            aria-hidden="true"
          >
            {icon}
          </span>
          <span className="sr-only">{label}</span>
        </span>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Backdrop />
        <Menu.Positioner sideOffset={6}>
          <Menu.Popup className="rounded-sm bg-gray-900 border border-slate-600 pt-4 pb-2 px-1 w-48">
            <Menu.Arrow id="tooltip-arrow">
              <ArrowSvg />
            </Menu.Arrow>
            <h2 className="text-sm text-slate-200 font-semibold text-center mb-1">
              Change Task Priority
            </h2>
            <Menu.Item
              className={menuItemClass}
              onClick={() => changePriorityHandler(1)}
            >
              <span
                className={`inline-flex items-center justify-center !p-1 rounded-full border ml-3 mr-2 ${priorityMap[1].border}`}
              >
                <span
                  className={`material-symbols-outlined ! ${priorityMap[1].color}`}
                  style={{ fontSize: "14px", fontWeight: 700 }}
                  aria-hidden="true"
                >
                  {priorityMap[1].icon}
                </span>
              </span>
              High
            </Menu.Item>
            <Menu.Item
              className={menuItemClass}
              onClick={() => changePriorityHandler(2)}
            >
              <span
                className={`inline-flex items-center justify-center !p-1 rounded-full border ml-3 mr-2 ${priorityMap[2].border}`}
              >
                <span
                  className={`material-symbols-outlined !${priorityMap[2].color}`}
                  style={{ fontSize: "14px", fontWeight: 700 }}
                  aria-hidden="true"
                >
                  {priorityMap[2].icon}
                </span>
              </span>
              Medium
            </Menu.Item>
            <Menu.Item
              className={menuItemClass}
              onClick={() => changePriorityHandler(3)}
            >
              <span
                className={`inline-flex items-center justify-center !p-1 rounded-full border ml-3 mr-2 ${priorityMap[3].border}`}
              >
                <span
                  className={`material-symbols-outlined ! ${priorityMap[3].color}`}
                  style={{ fontSize: "14px", fontWeight: 700 }}
                  aria-hidden="true"
                >
                  {priorityMap[3].icon}
                </span>
              </span>
              Low
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
