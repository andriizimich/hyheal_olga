import React from "react";
import { primaryTiles, secondaryTiles, months } from "../mock";
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
  BarChart3,
  BookOpenText,
  FileText,
  Info,
  Megaphone,
} from "lucide-react";

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
  BarChart3,
  BookOpenText,
  FileText,
  Info,
  Megaphone,
};

const TimelineTile = ({ tile, now, onClick }) => {
  const timeStr = now.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const dateStr = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} р.`;

  return (
    <button
      onClick={onClick}
      className="group relative flex items-stretch overflow-hidden rounded-md bg-[#5b7ee5] text-white shadow-[0_8px_24px_rgba(91,126,229,0.35)] transition-all duration-200 hover:shadow-[0_12px_30px_rgba(91,126,229,0.45)] hover:-translate-y-0.5 h-[128px]"
    >
      <div className="flex flex-col items-center justify-center flex-1 gap-3 border-r border-white/20">
        <Clock size={30} strokeWidth={1.7} />
        <span className="text-[15px] font-semibold">{tile.label}</span>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-1">
        <span className="text-[30px] font-bold leading-none tabular-nums">{timeStr}</span>
        <span className="text-[12.5px] text-white/85">{dateStr}</span>
      </div>
    </button>
  );
};

const PrimaryTile = ({ tile, onClick, now }) => {
  if (tile.isTimeline) {
    return <TimelineTile tile={tile} now={now} onClick={onClick} />;
  }
  const Icon = iconMap[tile.icon];
  const active = tile.active;
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col items-center justify-center gap-3 rounded-md h-[128px] transition-all duration-200 hover:-translate-y-0.5 ${
        active
          ? "bg-[#5b7ee5] text-white shadow-[0_8px_24px_rgba(91,126,229,0.35)] hover:shadow-[0_12px_30px_rgba(91,126,229,0.45)]"
          : "bg-white text-slate-500 border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:text-[#5b7ee5] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
      }`}
    >
      <Icon size={30} strokeWidth={1.6} />
      <span className={`text-[15px] font-semibold ${active ? "text-white" : "text-slate-600"}`}>
        {tile.label}
      </span>
    </button>
  );
};

const SecondaryTile = ({ tile, onClick }) => {
  const Icon = iconMap[tile.icon];
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3.5 rounded-md bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.04)] px-5 h-[70px] text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
    >
      <Icon size={24} strokeWidth={1.6} className="text-slate-400 shrink-0 group-hover:text-[#5b7ee5] transition-colors" />
      <span className="text-[14px] font-medium text-slate-600 leading-snug">{tile.label}</span>
    </button>
  );
};

const Dashboard = ({ now, onTileClick }) => {
  return (
    <div className="space-y-5">
      {/* Primary tiles */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {primaryTiles.map((tile) => (
          <PrimaryTile key={tile.id} tile={tile} now={now} onClick={() => onTileClick(tile)} />
        ))}
      </div>

      {/* Secondary tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {secondaryTiles.map((tile) => (
          <SecondaryTile key={tile.id} tile={tile} onClick={() => onTileClick(tile)} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
