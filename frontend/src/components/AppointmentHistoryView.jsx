import React, { useState } from "react";
import { appointmentHistory } from "../mock";
import { Search, ChevronLeft, ChevronRight, History, Clock } from "lucide-react";

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

const AppointmentCard = ({ a, onOpen }) => {
  const [date, time] = (a.finished || "").split(" ");
  const duration = a.id % 2 === 0 ? "30 хв" : "15 хв";
  return (
    <div className="rounded-md border border-slate-100 bg-white shadow-[0_1px_6px_rgba(15,23,42,0.04)] p-4 transition-shadow hover:shadow-[0_4px_14px_rgba(15,23,42,0.08)]">
      {/* Top row */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="font-bold text-slate-700 text-[15px] tabular-nums">{time}</span>
        <span className="font-semibold text-slate-500 text-[14px] tabular-nums">{date}</span>
        <span className="text-[12px] text-slate-500 border border-slate-200 rounded-full px-2.5 py-0.5">
          Тривалість: {duration}
        </span>
        <span className={`text-[12px] font-semibold rounded-full px-3 py-1 ${statusPill(a.status)}`}>
          {a.status}
        </span>
      </div>

      {/* Name + episode */}
      <button
        onClick={() => onOpen(a)}
        className="block text-left mt-3 text-[16px] font-semibold text-slate-700 hover:text-[#5b7ee5] transition"
      >
        {a.name}
      </button>
      <button
        onClick={() => onOpen(a)}
        className="block text-left text-[13.5px] text-[#5b7ee5] hover:underline mt-0.5"
      >
        {a.episode}
      </button>

      {/* Doctor + link */}
      <div className="flex flex-wrap items-end justify-between gap-3 mt-3">
        <div className="leading-tight">
          <p className="text-[15px] font-semibold text-[#5b7ee5]">{a.doctor}</p>
          <p className="text-[13px] text-slate-400">{a.specialty}</p>
        </div>
        <button
          onClick={() => onOpen(a)}
          className="flex items-center gap-1.5 text-[14px] font-medium text-[#5b7ee5] hover:underline"
        >
          <History size={15} /> Історія прийому
        </button>
      </div>
    </div>
  );
};

const AppointmentHistoryView = ({ p, onOpen }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = appointmentHistory.filter(
    (a) =>
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.episode.toLowerCase().includes(query.toLowerCase()) ||
      a.doctor.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const goto = (n) => setPage(Math.min(Math.max(1, n), totalPages));

  return (
    <div className="p-6 bg-white">
      <div className="flex items-center gap-2 mb-4">
        <Clock size={22} className="text-[#5b7ee5]" />
        <h1 className="text-[20px] font-bold text-slate-800">Історія прийомів</h1>
      </div>

      {/* Search */}
      <div className="relative w-full max-w-[520px] mb-5">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Пошук за назвою, епізодом або лікарем"
          className="w-full h-11 rounded-md border border-slate-200 pl-4 pr-11 text-[14px] text-slate-600 focus:outline-none focus:border-[#5b7ee5]"
        />
        <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {pageItems.map((a) => (
          <AppointmentCard key={a.id} a={a} onOpen={onOpen} />
        ))}
      </div>
      {pageItems.length === 0 && (
        <p className="py-10 text-center text-[14px] text-slate-400">Прийомів не знайдено</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6">
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
