import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { treatmentPlans } from "../mock";
import { Search, Plus, MoreVertical, Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const statusPill = (status) => {
  switch (status) {
    case "Активний":
      return "bg-[#eef2fc] text-[#5b7ee5]";
    case "Завершений":
      return "bg-[#f0faf5] text-[#3fb984]";
    case "Відмінений":
      return "bg-slate-100 text-slate-500";
    default:
      return "bg-slate-100 text-slate-500";
  }
};

const PlansList = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const filtered = treatmentPlans.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.patient.toLowerCase().includes(query.toLowerCase()) ||
      p.number.includes(query)
  );

  return (
    <div className="px-8 pt-3 pb-8 max-w-[1300px]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[28px] font-light text-slate-400">Плани лікування</h1>
        <button
          onClick={() => toast("Створити план лікування", { description: "Розділ у розробці" })}
          className="flex items-center gap-2 rounded-md bg-[#5b7ee5] text-white text-[14px] font-semibold px-4 py-2.5 hover:bg-[#4c6fd6] transition"
        >
          <Plus size={17} /> Створити план
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-[520px] mb-5">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Пошук за номером, діагнозом або пацієнтом"
          className="w-full h-11 rounded-md border border-slate-200 pl-4 pr-11 text-[14px] text-slate-600 focus:outline-none focus:border-[#5b7ee5]"
        />
        <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>

      {/* Table */}
      <div className="rounded-md border border-slate-100 overflow-hidden bg-white">
        <div
          className="grid gap-4 px-5 py-3 bg-slate-50 border-b border-slate-100 text-[13px] font-semibold text-slate-500"
          style={{ gridTemplateColumns: "200px minmax(0,1fr) 260px 130px 60px" }}
        >
          <span>№ плану</span>
          <span>Найменування (діагноз)</span>
          <span>Період покриття</span>
          <span>Статус</span>
          <span className="text-right">Дії</span>
        </div>
        {filtered.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/treatment-plans/${p.id}`)}
            className="w-full grid gap-4 px-5 py-4 border-b border-slate-100 last:border-b-0 text-[14px] text-slate-600 items-center text-left hover:bg-slate-50/70 transition cursor-pointer"
            style={{ gridTemplateColumns: "200px minmax(0,1fr) 260px 130px 60px" }}
          >
            <span className="font-semibold text-[#5b7ee5] tabular-nums text-[12px]">{p.number}</span>
            <span className="font-semibold text-slate-700 leading-snug pr-4">{p.name}</span>
            <span className="text-slate-500">{p.period}</span>
            <span>
              <span className={`text-[12px] font-semibold rounded-full px-3 py-1 ${statusPill(p.status)}`}>
                {p.status}
              </span>
            </span>
            <span className="flex justify-end" onClick={(e) => e.stopPropagation()}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="h-8 w-8 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-400">
                    <MoreVertical size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem
                    onClick={() => toast("Редагувати", { description: p.number })}
                    className="cursor-pointer"
                  >
                    <Pencil size={15} className="mr-2 text-[#5b7ee5]" /> Редагувати
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => toast("Видалити", { description: p.number })}
                    className="cursor-pointer text-[#e85b5b] focus:text-[#e85b5b]"
                  >
                    <Trash2 size={15} className="mr-2" /> Видалити
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="px-5 py-8 text-center text-[14px] text-slate-400">Планів не знайдено</p>
        )}
      </div>
    </div>
  );
};

export default PlansList;
