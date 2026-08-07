import React from "react";
import {
  ShieldPlus,
  FlaskConical,
  Syringe,
  Microscope,
  Mars,
  Venus,
  Phone,
  CalendarDays,
  MoreVertical,
} from "lucide-react";

const MiniIcon = ({ Icon, color }) => (
  <span
    className="h-8 w-8 rounded-full border flex items-center justify-center bg-white"
    style={{ borderColor: color, color }}
  >
    <Icon size={15} />
  </span>
);

const PatientResultCard = ({ p, onAction }) => {
  return (
    <div
      className={`relative flex gap-5 bg-white rounded-md border border-slate-100 shadow-[0_1px_8px_rgba(15,23,42,0.06)] p-5 overflow-hidden ${
        p.hasDeclaration ? "border-l-[5px] border-l-[#3fb984]" : ""
      }`}
    >
      {/* Avatar column */}
      <div className="shrink-0 flex flex-col items-center gap-3">
        <div className="relative">
          <img
            src={p.avatar}
            alt={p.name}
            className="h-[110px] w-[110px] rounded-full object-cover bg-slate-100"
          />
          {p.hasDeclaration && (
            <span className="absolute -top-1 -left-1 h-8 w-8 rounded-full bg-[#3fb984] text-white flex items-center justify-center ring-2 ring-white">
              <ShieldPlus size={16} />
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <MiniIcon Icon={FlaskConical} color="#e85b8f" />
          <MiniIcon Icon={Syringe} color="#8b7ce8" />
          <MiniIcon Icon={Microscope} color="#4aa8e8" />
        </div>
      </div>

      {/* Info column */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-[14px] font-semibold mb-1 ${
            p.hasDeclaration ? "text-[#3fb984]" : "text-slate-400"
          }`}
        >
          {p.hasDeclaration ? "Є декларація" : "Відсутня реєстрація в ЕСОЗ"}
        </p>
        <h3 className="text-[19px] font-bold text-slate-700 leading-tight">
          {p.name}
        </h3>

        <div className="flex items-center gap-2 mt-2 text-[14px] text-slate-500">
          {p.gender === "male" ? (
            <Mars size={15} className="text-[#5b7ee5]" />
          ) : (
            <Venus size={15} className="text-[#e85b9a]" />
          )}
          {p.birth} ({p.age})
        </div>

        <p className="mt-1.5 text-[14px] text-slate-500">{p.location}</p>

        <div className="flex items-center gap-2 mt-1.5 text-[14px] text-slate-500">
          <Phone size={15} className="text-slate-400" />
          {p.phone}
        </div>

        <div className="flex items-center gap-2 mt-1.5 text-[14px] text-slate-500">
          <CalendarDays size={15} className="text-slate-400" />
          {p.visits} візитів
        </div>

        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={() => onAction(p)}
            className={`flex-1 rounded-md text-[14px] font-semibold py-2.5 text-white transition ${
              p.esoz
                ? "bg-[#3fb984] hover:bg-[#36a675]"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
          >
            {p.esoz ? "Записати до лікаря" : "Зареєструвати в ЕСОЗ"}
          </button>
          <button className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientResultCard;
