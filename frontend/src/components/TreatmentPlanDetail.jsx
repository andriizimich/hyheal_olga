import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { treatmentPlans } from "../mock";
import {
  ChevronDown,
  Printer,
  Plus,
  Pill,
  ClipboardList,
  MoreVertical,
} from "lucide-react";

const statusPill = (status) => {
  switch (status) {
    case "Активний":
      return "bg-[#5b7ee5] text-white";
    case "Завершений":
      return "bg-[#3fb984] text-white";
    case "Відмінений":
      return "bg-slate-300 text-slate-600";
    default:
      return "bg-slate-200 text-slate-600";
  }
};

const FilterSelect = ({ label }) => (
  <button className="flex-1 flex items-center justify-between h-11 px-4 rounded-md border border-slate-200 bg-white text-[14px] text-slate-500 hover:bg-slate-50">
    {label} <ChevronDown size={16} className="text-slate-400" />
  </button>
);

const PlanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = treatmentPlans.find((p) => p.id === id) || treatmentPlans[0];
  const [showMore, setShowMore] = useState(false);
  const fmt = (s) =>
    (s || "").replace(/\s*-\s*Не вказано/g, "").replace(/202[0-9]/g, "2026");

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className={`text-[11px] font-semibold rounded px-2 py-0.5 ${statusPill(plan.status)}`}>
          {plan.status}
        </span>
        <h1 className="text-[24px] font-bold text-slate-800">
          План лікування <span className="text-slate-500 font-semibold">№ {plan.number}</span>
        </h1>
        <div className="flex items-center gap-2 ml-auto">
          <button disabled className="rounded-md bg-slate-100 text-slate-400 text-[13px] font-medium px-4 py-2">
            Завершити
          </button>
          <button disabled className="rounded-md bg-slate-100 text-slate-400 text-[13px] font-medium px-4 py-2">
            Відмінити
          </button>
          <button
            onClick={() => toast("Створити прийом", { description: plan.patient })}
            className="rounded-md bg-[#5b7ee5] text-white text-[13px] font-semibold px-4 py-2 hover:bg-[#4c6fd6] transition"
          >
            Створити прийом
          </button>
          <button
            onClick={() => navigate("/treatment-plans")}
            className="rounded-md border border-slate-200 text-slate-600 text-[13px] font-medium px-4 py-2 hover:bg-slate-50 transition"
          >
            Назад до списку планів
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 max-w-5xl">
        <div>
          <p className="text-[14px] font-bold text-slate-600 mb-1">Найменування</p>
          <p className="text-[15px] text-slate-500 border-b border-slate-200 pb-2">{plan.name}</p>
        </div>
        <div>
          <p className="text-[14px] font-bold text-slate-600 mb-1">Період покриття</p>
          <p className="text-[15px] text-slate-500 border-b border-slate-200 pb-2">{fmt(plan.period)}</p>
        </div>
      </div>

      <button
        onClick={() => setShowMore((s) => !s)}
        className="flex items-center gap-1.5 text-[15px] font-semibold text-[#5b7ee5] mt-4"
      >
        Детальніше
        <ChevronDown size={17} className={`transition-transform ${showMore ? "rotate-180" : ""}`} />
      </button>
      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-4 mt-4 max-w-5xl">
          <div>
            <p className="text-[13px] font-semibold text-slate-500 mb-1">Пацієнт</p>
            <p className="text-[14px] text-slate-500">{plan.patient}</p>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-slate-500 mb-1">Дата створення</p>
            <p className="text-[14px] text-slate-500">{plan.created}</p>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-slate-500 mb-1">Лікар</p>
            <p className="text-[14px] text-slate-500">{plan.doctor}</p>
          </div>
        </div>
      )}

      {/* Assignments */}
      <div className="flex items-center justify-between mt-8 mb-3">
        <h2 className="text-[20px] font-bold text-[#5b7ee5]">Призначення</h2>
        <button
          onClick={() => toast("Роздрукувати", { description: "Формування документа..." })}
          className="flex items-center gap-2 rounded-md bg-[#5b7ee5] text-white text-[13px] font-semibold px-4 py-2 hover:bg-[#4c6fd6] transition"
        >
          <Printer size={16} /> Роздрукувати <ChevronDown size={14} />
        </button>
      </div>
      <div className="h-px bg-slate-200 mb-4" />

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-5">
        <FilterSelect label="Всі" />
        <FilterSelect label="Оберіть статус" />
        <FilterSelect label="Оберіть тип" />
      </div>

      {/* Table */}
      <div className="rounded-md border border-slate-100 overflow-hidden">
        <div
          className="grid gap-4 px-4 py-3 bg-slate-50 border-b border-slate-100 text-[13px] font-semibold text-slate-500"
          style={{ gridTemplateColumns: "40px 56px minmax(0,1fr) 150px 110px 110px 50px" }}
        >
          <span></span>
          <span>Тип</span>
          <span>Назва</span>
          <span>Заплановано</span>
          <span>Кількість/ Залишилось</span>
          <span>Статус</span>
          <span className="text-right">Дії</span>
        </div>
        {plan.items.map((it, i) => (
          <div
            key={i}
            className="grid gap-4 px-4 py-4 border-b border-slate-100 last:border-b-0 text-[14px] text-slate-600 items-center hover:bg-slate-50/60"
            style={{ gridTemplateColumns: "40px 56px minmax(0,1fr) 150px 110px 110px 50px" }}
          >
            <button className="h-6 w-6 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-100">
              <Plus size={14} />
            </button>
            <span>
              {it.type === "med" ? (
                <span className="h-8 w-8 rounded-md bg-[#fdf3d8] text-[#d9a520] flex items-center justify-center">
                  <Pill size={16} />
                </span>
              ) : (
                <span className="h-8 w-8 rounded-md bg-[#e3edfb] text-[#5b7ee5] flex items-center justify-center">
                  <ClipboardList size={16} />
                </span>
              )}
            </span>
            <span className="font-semibold text-slate-700 leading-snug pr-4">{it.name}</span>
            <span className="text-slate-500 text-[11px]">{fmt(it.planned)}</span>
            <span className="text-slate-500">{it.qty}</span>
            <span>
              <span className="text-[12px] font-medium text-slate-500 border border-slate-200 rounded px-2 py-0.5">
                {it.status}
              </span>
            </span>
            <span className="text-right">
              <button className="h-8 w-8 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-400 ml-auto">
                <MoreVertical size={16} />
              </button>
            </span>
          </div>
        ))}
      </div>

      {/* Bottom actions */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={() => toast("Створити призначення", { description: plan.patient })}
          className="rounded-md bg-[#5b7ee5] text-white text-[14px] font-semibold px-5 py-2.5 hover:bg-[#4c6fd6] transition"
        >
          Створити призначення
        </button>
        <button
          onClick={() => navigate("/treatment-plans")}
          className="rounded-md border border-slate-200 text-slate-600 text-[14px] font-medium px-5 py-2.5 hover:bg-slate-50 transition"
        >
          Повернутись
        </button>
      </div>
    </div>
  );
};

export default PlanDetail;
