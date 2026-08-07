import React, { useState } from "react";
import { toast } from "sonner";
import { diseaseEpisodes } from "../mock";
import {
  ChevronDown,
  Search,
  CalendarDays,
  X,
  MoreVertical,
  Eye,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const tabs = ["Епізоди", "Активні діагнози", "Особливі стани", "Локальний архів"];

const DateCell = ({ value }) => {
  const [date, time] = (value || "").split(" ");
  return (
    <span className="leading-tight">
      <span className="block text-slate-500">{date}</span>
      <span className="block text-[12px] text-slate-400">{time}</span>
    </span>
  );
};

const grid = "56px minmax(0,1fr) 120px 130px 150px 52px";

const DiseaseHistoryView = ({ p }) => {
  const [tab, setTab] = useState("Епізоди");
  const [query, setQuery] = useState("");

  const filtered = diseaseEpisodes.filter((e) =>
    e.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[20px] font-bold text-slate-800">Історія захворювань</h1>
        <button
          onClick={() => toast("Переглянути архів", { description: p.name })}
          className="rounded-md border border-slate-200 text-slate-600 text-[13px] font-medium px-4 py-2 hover:bg-slate-50 transition"
        >
          Переглянути архів
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 border-b border-slate-200 mb-4">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-[14px] font-medium border-b-2 -mb-px transition ${
              tab === t
                ? "border-[#5b7ee5] text-[#5b7ee5]"
                : "border-transparent text-slate-500 hover:text-[#5b7ee5]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <button className="flex items-center justify-between h-10 px-4 rounded-md border border-slate-200 bg-white text-[14px] text-slate-500 min-w-[220px] hover:bg-slate-50">
          Доступні мені <ChevronDown size={16} className="text-slate-400" />
        </button>
        <button className="flex items-center justify-between h-10 px-4 rounded-md border border-slate-200 bg-white text-[14px] text-slate-500 min-w-[200px] hover:bg-slate-50">
          <span>Активні</span>
          <span className="flex items-center gap-1 text-slate-400">
            <X size={14} /> <ChevronDown size={16} />
          </span>
        </button>
        <button className="flex items-center justify-between h-10 px-4 rounded-md border border-slate-200 bg-white text-[14px] text-slate-500 min-w-[130px] hover:bg-slate-50">
          МКХ-10 <ChevronDown size={16} className="text-slate-400" />
        </button>
        <div className="relative flex-1 min-w-[240px]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Назва / код МКХ-10"
            className="w-full h-10 rounded-md border border-slate-200 pl-3 pr-10 text-[14px] text-slate-600 focus:outline-none focus:border-[#5b7ee5]"
          />
          <Search size={17} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
        <div className="relative w-[170px]">
          <input
            placeholder="__.__.____"
            className="w-full h-10 rounded-md border border-slate-200 pl-3 pr-10 text-[14px] text-slate-600 focus:outline-none focus:border-[#5b7ee5]"
          />
          <CalendarDays size={17} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border border-slate-100 overflow-hidden">
        <div
          className="grid gap-4 px-4 py-3 bg-slate-50 border-b border-slate-100 text-[13px] font-semibold text-slate-500"
          style={{ gridTemplateColumns: grid }}
        >
          <span>Статус</span>
          <span>Назва / Діагноз</span>
          <span>Тип</span>
          <span>Початок</span>
          <span>Оновлено / Завершено</span>
          <span className="text-right">Дії</span>
        </div>
        {filtered.map((e) => (
          <div
            key={e.id}
            className="grid gap-4 px-4 py-4 border-b border-slate-100 last:border-b-0 text-[14px] items-center hover:bg-slate-50/60"
            style={{ gridTemplateColumns: grid }}
          >
            <span className="flex justify-start">
              <span className="h-3.5 w-3.5 rounded-full bg-[#5b7ee5]" />
            </span>
            <button
              onClick={() => toast("Епізод", { description: e.name })}
              className="text-left text-[#5b7ee5] font-semibold leading-snug hover:underline pr-4"
            >
              {e.name}
            </button>
            <span className="text-slate-500">{e.type}</span>
            <DateCell value={e.start} />
            <DateCell value={e.updated} />
            <span className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="h-8 w-8 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-400 ml-auto">
                    <MoreVertical size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem
                    onClick={() => toast("Переглянути", { description: e.name })}
                    className="cursor-pointer"
                  >
                    <Eye size={15} className="mr-2 text-[#5b7ee5]" /> Переглянути
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseaseHistoryView;
