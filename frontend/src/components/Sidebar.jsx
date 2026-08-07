import React from "react";
import { sidebarItems } from "../mock";
import {
  Clock,
  CalendarCheck,
  CalendarDays,
  Stethoscope,
  ShieldPlus,
  Contact,
  ClipboardCheck,
  RefreshCw,
  FileStack,
  FolderClosed,
  List,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const iconMap = {
  Clock,
  CalendarCheck,
  CalendarDays,
  Stethoscope,
  ShieldPlus,
  Contact,
  ClipboardCheck,
  RefreshCw,
  FileStack,
  FolderClosed,
  List,
};

const Sidebar = ({ activeId, onSelect }) => {
  return (
    <aside className="w-[68px] shrink-0 bg-white border-r border-slate-100 flex flex-col items-center py-4 gap-1">
      <TooltipProvider delayDuration={100}>
        {sidebarItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = activeId === item.id;
          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onSelect(item.id)}
                  className={`relative flex items-center justify-center w-11 h-11 rounded-md transition-all duration-200 group ${
                    isActive
                      ? "text-[#5b7ee5] bg-[#eef2fc]"
                      : "text-slate-400 hover:text-[#5b7ee5] hover:bg-slate-50"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-[-16px] top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-full bg-[#5b7ee5]" />
                  )}
                  <Icon size={22} strokeWidth={1.8} />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-slate-800 text-white border-none">
                {item.tooltip}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </aside>
  );
};

export default Sidebar;
