import React, { useState } from "react";
import { appointmentHistory } from "../mock";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const PER_PAGE = 12;

const statusPill = (status) => {
  switch (status) {
    case "Активний":
      return "bg-[#eef2fc] text-[#5b7ee5]";
    case "Завершений":
      return "bg-[#f0faf5] text-[#3fb984]";
    case "Скасований":
      return "bg-slate-100 text-slate-500";
    default:
      return "bg-slate-100 text-slate-500";
  }
};

const grid = "minmax(0,1.4fr) minmax(0,1.6fr) 200px 150px";

const AppointmentHistoryView = ({ p, onOpen }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = appointmentHistory.filter(
    (a) =>
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.episode.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const goto = (n) => setPage(Math.min(Math.max(1, n), totalPages));

  return (
    <div className="p-6 bg-white">
      <h1 className="text-[20px] font-bold text-slate-800 mb-4">Історія прийомів</h1>

      {/* Search */}
      <div className="relative max-w-[520px] mb-5">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Пошук за назвою або епізодом"
          className="w-full h-11 rounded-md border border-slate-200 pl-4 pr-11 text-[14px] text-slate-600 focus:outline-none focus:border-[#5b7ee5]"
        />
        <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>

      {/* Table */}
      <div className="rounded-md border border-slate-100 overflow-hidden">
        <div
          className="grid gap-4 px-4 py-3 bg-slate-50 border-b border-slate-100 text-[13px] font-semibold text-slate-500"
          style={{ gridTemplateColumns: grid }}
        >
          <span>Назва прийому</span>
          <span>Епізод</span>
          <span>Дата і час завершення</span>
          <span>Статус</span>
        </div>
        {pageItems.map((a) => (
          <div
            key={a.id}
            className="grid gap-4 px-4 py-4 border-b border-slate-100 last:border-b-0 text-[14px] items-center hover:bg-slate-50/60"
            style={{ gridTemplateColumns: grid }}
          >
            <button
              onClick={() => onOpen(a)}
              className="text-left text-[#5b7ee5] font-semibold hover:underline"
            >
              {a.name}
            </button>
            <button
              onClick={() => onOpen(a)}
              className="text-left text-[#5b7ee5] font-medium leading-snug hover:underline pr-4"
            >
              {a.episode}
            </button>
            <span className="text-slate-500">{a.finished}</span>
            <span>
              <span className={`text-[12px] font-semibold rounded-full px-3 py-1 ${statusPill(a.status)}`}>
                {a.status}
              </span>
            </span>
          </div>
        ))}
        {pageItems.length === 0 && (
          <p className="px-4 py-8 text-center text-[14px] text-slate-400">Прийомів не знайдено</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-5">
          <button
            onClick={() => goto(current - 1)}
            disabled={current === 1}
            className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 disabled:opacity-40"
          >
            <ChevronLeft size={16} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => goto(n)}
              className={`h-9 w-9 rounded-md text-[14px] font-medium transition ${
                n === current
                  ? "bg-[#5b7ee5] text-white"
                  : "border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => goto(current + 1)}
            disabled={current === totalPages}
            className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 disabled:opacity-40"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentHistoryView;
