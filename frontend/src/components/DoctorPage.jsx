import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doctor, doctorMenu, doctorCode, appointments } from "../mock";
import {
  Store,
  Clock,
  FileText,
  ClipboardList,
  Briefcase,
  Users,
  CheckSquare,
  RefreshCw,
  Star,
  Link2,
  Phone,
  Pencil,
  User,
  CalendarPlus,
  Search,
  Info,
  CalendarDays,
  ChevronDown,
  ShieldCheck,
  CircleCheck,
  Mars,
  Venus,
  RotateCcw,
  History,
  UserRound,
} from "lucide-react";
import { Switch } from "./ui/switch";

const menuIconMap = {
  Store,
  Clock,
  FileText,
  ClipboardList,
  Briefcase,
  Users,
  CheckSquare,
  RefreshCw,
  Star,
  Link2,
};

const ProfileSide = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[300px] shrink-0">
      {/* Photo card */}
      <div className="relative rounded-md overflow-hidden bg-slate-100">
        <img
          src={doctor.avatar}
          alt={doctor.name}
          className="w-full h-[240px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <button className="absolute top-3 left-3 h-9 w-9 rounded-full bg-white/25 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 transition">
          <Phone size={16} />
        </button>
        <button className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/25 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 transition">
          <Pencil size={16} />
        </button>
        <div className="absolute bottom-3 left-0 right-0 text-center text-white px-3">
          <p className="font-bold text-[15px] leading-tight">{doctor.name}</p>
          <p className="text-[12px] text-white/90 mt-1 leading-snug">
            Лікар загальної практики - Сімейний лікар
          </p>
          <p className="text-[12px] text-white/90 leading-snug">Сімейний лікар</p>
        </div>
      </div>

      {/* Code bar */}
      <div className="bg-[#3fb984] text-white text-[11px] px-3 py-2 -mt-[1px] rounded-b-md">
        Код працівника: {doctorCode}
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-2 mt-3">
        <button className="flex items-center justify-center gap-2 rounded-md bg-[#5b7ee5] text-white text-[13px] font-semibold py-2.5 hover:bg-[#4c6fd6] transition">
          <User size={16} /> Профіль
        </button>
        <button className="flex items-center justify-center gap-2 rounded-md bg-[#f5a623] text-white text-[13px] font-semibold py-2.5 hover:bg-[#eb9c17] transition">
          <CalendarPlus size={16} /> Запланувати
        </button>
      </div>
      <button className="w-full mt-2 flex items-center justify-center gap-2 rounded-md border border-slate-200 text-slate-600 text-[13px] font-medium py-2.5 hover:bg-slate-50 transition">
        <Clock size={16} className="text-[#5b7ee5]" /> Створити прийом на зараз
      </button>

      {/* Menu */}
      <nav className="mt-3 rounded-md overflow-hidden border border-slate-100">
        {doctorMenu.map((item) => {
          const Icon = menuIconMap[item.icon];
          return (
            <button
              key={item.id}
              onClick={() => item.to && navigate(item.to)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-[14px] text-left border-b border-slate-50 last:border-b-0 transition ${
                item.active
                  ? "bg-[#5b7ee5] text-white font-semibold"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Icon size={17} strokeWidth={1.8} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

const AppointmentCard = ({ a, onOpen }) => (
  <div className="rounded-md border border-slate-100 bg-white shadow-[0_1px_6px_rgba(15,23,42,0.04)] px-5 py-4">
    <div className="flex items-center flex-wrap gap-x-4 gap-y-2">
      <span className="font-bold text-slate-700 text-[15px] tabular-nums">{a.time}</span>
      <span className="font-semibold text-slate-500 text-[14px] tabular-nums">{a.date}</span>
      <span className="text-[13px] text-slate-400">
        Тривалість: <span className="text-slate-600 font-medium">{a.duration}</span>
      </span>
      <span className="text-[12px] font-medium text-slate-500 border border-slate-200 rounded px-2 py-0.5">
        {a.status}
      </span>
      {a.synced && (
        <span className="ml-auto flex items-center gap-1.5 text-[12px] font-medium text-[#3fb984] border border-[#bfe8d6] bg-[#f0faf5] rounded px-2 py-1">
          <CircleCheck size={14} /> Синхронізовано
        </span>
      )}
    </div>

    {a.hasDeclaration && (
      <div className="flex items-center gap-2 mt-3 text-[13px] text-[#3fb984] font-medium">
        <ShieldCheck size={16} /> Є декларація
        {a.declarationNote && (
          <span className="text-slate-400 font-normal">{a.declarationNote}</span>
        )}
      </div>
    )}

    <button
      onClick={() => onOpen(a)}
      className="mt-2 text-[#5b7ee5] font-semibold text-[15px] hover:underline"
    >
      {a.patient}
    </button>

    <div className="flex items-center gap-1.5 mt-1 text-[13px] text-slate-500">
      {a.gender === "male" ? (
        <Mars size={14} className="text-[#5b7ee5]" />
      ) : (
        <Venus size={14} className="text-[#e85b9a]" />
      )}
      {a.birth} ({a.age})
    </div>

    <div className="flex items-center justify-between mt-3">
      <button className="flex items-center gap-2 rounded-md border border-slate-200 text-slate-600 text-[13px] font-medium px-3 py-2 hover:bg-slate-50 transition">
        <CalendarPlus size={15} /> Записати повторно
      </button>
      <button className="flex items-center gap-2 text-[#5b7ee5] text-[13px] font-medium hover:underline">
        <History size={15} /> Історія прийому
      </button>
    </div>
  </div>
);

const DoctorPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("today");
  const [hidden, setHidden] = useState(false);
  const [query, setQuery] = useState("");

  const openPatient = (a) =>
    navigate(`/patient/${a.id}`, {
      state: {
        patient: {
          name: a.patient,
          phone: "+38 (093) 432-50-70",
          gender: a.gender,
          age: a.age,
          birth: a.birth,
          verified: true,
        },
      },
    });

  const filtered = appointments.filter((a) =>
    a.patient.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Title */}
      <div className="flex items-center gap-3 mb-1">
        <UserRound size={26} className="text-[#5b7ee5]" strokeWidth={1.8} />
        <h1 className="text-[24px] font-bold text-slate-800">
          Сторінка лікаря: {doctor.name}
        </h1>
        <span className="flex items-center gap-1.5 text-[13px] font-semibold text-[#3fb984]">
          <CircleCheck size={16} /> Асоційований з ЕСОЗ
        </span>
      </div>
      <p className="text-[13px] font-bold text-slate-500 max-w-4xl mb-5">
        {doctor.organization.toUpperCase()}, {doctor.subdivision}
      </p>

      <div className="flex gap-6">
        <ProfileSide />

        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Filters row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ПІБ пацієнта"
                className="w-[280px] h-10 rounded-md border border-slate-200 pl-3 pr-10 text-[14px] text-slate-600 focus:outline-none focus:border-[#5b7ee5]"
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
            <button className="flex items-center gap-2 h-10 px-4 rounded-md border border-slate-200 text-[14px] text-slate-500 min-w-[220px] justify-between hover:bg-slate-50">
              Стан прийомів <ChevronDown size={16} />
            </button>
            <button className="h-10 px-5 rounded-md bg-slate-100 text-slate-400 text-[14px] font-medium cursor-default ml-auto">
              Скинути
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-5">
            <div className="flex items-center gap-2">
              <Switch checked={hidden} onCheckedChange={setHidden} />
              <span className="text-[14px] text-slate-600">Показати приховані</span>
              <Info size={15} className="text-slate-400" />
            </div>

            <div className="flex rounded-md border border-slate-200 overflow-hidden">
              {[
                { id: "past", label: "Минулі" },
                { id: "today", label: "Сьогодні" },
                { id: "future", label: "Майбутні" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`px-5 h-10 text-[14px] font-medium transition ${
                    tab === t.id
                      ? "bg-[#eef2fc] text-[#5b7ee5]"
                      : "bg-white text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[14px] text-slate-500">з</span>
              <div className="flex items-center gap-2 h-10 px-3 rounded-md border border-slate-200 text-[14px] text-slate-600">
                05.08.2026 <CalendarDays size={16} className="text-slate-400" />
              </div>
              <span className="text-[14px] text-slate-500">До</span>
              <div className="flex items-center gap-2 h-10 px-3 rounded-md border border-slate-200 text-[14px] text-slate-600">
                05.08.2026 <CalendarDays size={16} className="text-slate-400" />
              </div>
              <button className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">
                <RotateCcw size={16} />
              </button>
            </div>
          </div>

          {/* Day header */}
          <div className="mb-3">
            <p className="text-[11px] uppercase tracking-wide text-slate-400">середа</p>
            <p className="text-[20px] font-bold text-slate-700">5 серпня</p>
          </div>

          {/* Appointments */}
          <div className="space-y-3">
            {filtered.map((a) => (
              <AppointmentCard key={a.id} a={a} onOpen={openPatient} />
            ))}
            {filtered.length === 0 && (
              <p className="text-slate-400 text-[14px] py-8 text-center">
                Прийомів не знайдено
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
