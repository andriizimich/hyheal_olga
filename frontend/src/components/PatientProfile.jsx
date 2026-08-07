import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { patientMenu, defaultPatientProfile } from "../mock";
import { Checkbox } from "./ui/checkbox";
import ProfileView from "./ProfileView";
import DiseaseHistoryView from "./DiseaseHistoryView";
import AppointmentHistoryView from "./AppointmentHistoryView";
import {
  BadgeCheck,
  Mars,
  Venus,
  CalendarPlus,
  ChevronDown,
  Info,
  CircleCheck,
  Clock,
  RotateCcw,
} from "lucide-react";

const subToSection = (label) =>
  label === "Історія захворювань" ? "disease-history" : `sub-${label}`;

const findParentId = (sec) => {
  for (const m of patientMenu) {
    if (m.expandable && m.sub && m.sub.some((s) => subToSection(s) === sec)) {
      return m.id;
    }
  }
  return null;
};

const Field = ({ label, value, children }) => (
  <div>
    <p className="text-[13px] font-semibold text-slate-500 mb-1">{label}</p>
    {value !== undefined ? (
      <p className="text-[14px] text-slate-500">{value}</p>
    ) : (
      children
    )}
  </div>
);

const CheckRow = ({ label }) => (
  <label className="flex items-center gap-2.5 text-[14px] text-slate-600 py-1.5">
    <Checkbox className="border-slate-300" />
    {label}
  </label>
);

const tabs = [
  "Прийом",
  "Медзаписи",
  "Медичні висновки",
  "е-Рецепт",
  "е-Направлення",
  "Плани лікування",
];

const AppointmentView = ({ p }) => {
  const [activeTab, setActiveTab] = useState("Прийом");
  return (
    <div className="p-6 bg-white">
      {/* Header row */}
      <div className="flex flex-wrap items-start justify-between gap-6 mb-4">
        <h1 className="text-[20px] font-bold text-slate-800">Прийом пацієнта</h1>
        <div className="flex gap-10 text-[13px]">
          <div>
            <p className="font-semibold text-slate-500 mb-1">Статус</p>
            <p className="text-slate-500">Завершений</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 mb-1">Епізод</p>
            <p className="text-slate-500 max-w-[220px]">
              R74 Гостра інфекція верхніх дихальних шляхів
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 mb-1">Дата та час завершення</p>
            <p className="text-slate-500">04.04.2023 16:48</p>
          </div>
        </div>
      </div>

      {/* Template bar */}
      <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-md px-4 py-3 mb-5">
        <div className="flex items-center gap-2 text-[14px] text-slate-500">
          <Info size={17} className="text-[#5b7ee5]" />
          Застосовано шаблон: R74 Гостра інфекція верхніх дихальних шляхів
        </div>
        <button className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-1.5 text-[13px] text-slate-600 hover:bg-slate-50">
          Шаблони <ChevronDown size={15} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 border-b border-slate-200 mb-5">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-2.5 text-[14px] font-medium border-b-2 -mb-px transition ${
              activeTab === t
                ? "border-[#5b7ee5] text-[#5b7ee5]"
                : "border-transparent text-slate-500 hover:text-[#5b7ee5]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Conclusion */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 bg-[#3fb984] text-white text-[12px] font-medium rounded px-2.5 py-1">
          <CircleCheck size={14} /> Синхронізовано
        </span>
        <button className="border border-slate-200 rounded-md px-4 py-2 text-[13px] text-slate-600 hover:bg-slate-50">
          Назад до прийому
        </button>
      </div>

      <h2 className="text-[22px] font-bold text-slate-800 mb-5">
        Медичний висновок про тимчасову непрацездатність
      </h2>

      <h3 className="text-[17px] font-bold text-[#5b7ee5] mb-4">Загальні дані</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
        <Field label="Номер висновку" value="МВЗА-К64К-ВК2В-КВ87" />
        <Field label="Статус по створенню ЕЛН">
          <span className="flex items-center gap-1.5 text-[14px] text-slate-500">
            <CircleCheck size={15} className="text-[#3fb984]" /> Виконана
            <Info size={13} className="text-slate-400" />
          </span>
        </Field>
        <Field label="Номер лікарняного в ЕРЛН" value="5178788-2009927075-1" />
      </div>

      <div className="mt-4 mb-5">
        <a className="text-[14px] font-medium text-[#5b7ee5] hover:underline float-right">
          Історія обробки
        </a>
      </div>

      <div className="clear-both border-t border-slate-100 pt-5">
        <Field label="Категорія" value="Захворювання або травма загального характеру" />
      </div>

      <div className="mt-4">
        <CheckRow label="Новий випадок непрацездатності" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5 mt-4">
        <Field label="Пацієнт" value={`${p.name}, ${p.birth}`} />
        <Field label="Непрацездатна особа" value={p.name.split(" ").slice(0, 2).join(" ")} />
        <Field label="Метод автентифікації" value="3ee4a9f9-a7f5-49d7-90c5-67d68c0d7143" />
      </div>

      <div className="mt-4 space-y-0">
        <CheckRow label="Порушення режиму лікування" />
        <CheckRow label="Непрацездатність пов'язана з випадком на виробництві" />
        <CheckRow label="Діагностована алкогольна, або наркотична інтоксикація" />
        <CheckRow label="Непрацездатність настала за кордоном" />
      </div>

      <h3 className="text-[17px] font-bold text-[#5b7ee5] mt-8 mb-4">Додаткові дані</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5 pb-8">
        <Field label="Термін дійсності" value="04.04.2023 — 11.04.2023" />
        <Field label="Дата та час створення висновку" value="04.04.2023 16:48" />
        <Field label="Взаємодія" value="ЕСОЗ" />
      </div>
    </div>
  );
};

const Placeholder = ({ title }) => (
  <div className="p-6 bg-white">
    <h1 className="text-[24px] font-bold text-slate-800">{title}</h1>
    <p className="text-slate-400 text-[15px] mt-4">Розділ у розробці</p>
  </div>
);

const PatientProfile = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const p = location.state?.patient || defaultPatientProfile;
  const initialSection = searchParams.get("section") || "profile";
  const [section, setSectionState] = useState(initialSection);
  const [open, setOpen] = useState(() => {
    const parent = findParentId(initialSection);
    return parent ? { [parent]: true } : {};
  });

  const setSection = (s) => {
    setSectionState(s);
    setSearchParams({ section: s }, { replace: true });
  };

  const handleMenu = (item) => {
    if (item.expandable) {
      setOpen((o) => ({ ...o, [item.id]: !o[item.id] }));
    } else {
      setSection(item.id);
    }
  };

  const renderMain = () => {
    if (section === "profile") return <ProfileView p={p} />;
    if (section === "history")
      return (
        <AppointmentHistoryView p={p} onOpen={() => setSection("appointment-detail")} />
      );
    if (section === "appointment-detail") return <AppointmentView p={p} />;
    if (section === "disease-history") return <DiseaseHistoryView p={p} />;
    if (section.startsWith("sub-"))
      return <Placeholder title={section.slice(4)} />;
    const item = patientMenu.find((m) => m.id === section);
    return <Placeholder title={item ? item.label : "Розділ"} />;
  };

  return (
    <div className="flex min-h-full">
      {/* Left patient panel */}
      <div className="w-[280px] shrink-0 bg-[#f4f5f9] border-r border-slate-200 p-4">
        <h2 className="text-[18px] font-bold text-slate-800 leading-tight">{p.name}</h2>
        <p className="text-[15px] text-slate-500 mt-1">{p.phone}</p>

        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex flex-col items-center gap-1">
            <BadgeCheck size={22} className="text-[#3fb984]" />
            <span className="text-[12px] text-slate-400">
              {p.verified ? "Перевірено" : "Не перевірено"}
            </span>
          </div>
          <div className="h-9 w-px bg-slate-200" />
          <div className="flex flex-col items-center gap-1">
            {p.gender === "male" ? (
              <Mars size={20} className="text-[#5b7ee5]" />
            ) : (
              <Venus size={20} className="text-[#e85b9a]" />
            )}
            <span className="text-[12px] text-slate-400">{p.age}</span>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 border border-slate-200 bg-white rounded-md py-2 mt-4 text-[14px] font-medium text-slate-600 hover:bg-slate-50 transition">
          <CalendarPlus size={16} className="text-[#5b7ee5]" /> Запланувати прийом
        </button>

        {/* Buttons only on Profile section */}
        {section === "profile" && (
          <>
            <button
              onClick={() => toast("Почати прийом", { description: p.name })}
              className="w-full flex items-center justify-center gap-2 bg-[#5b7ee5] text-white rounded-md py-2 mt-2 text-[14px] font-semibold hover:bg-[#4c6fd6] transition"
            >
              <Clock size={16} /> Почати прийом
            </button>
            <button
              onClick={() => toast("Повернутись у прийом", { description: p.name })}
              className="w-full flex items-center justify-center gap-2 border border-slate-200 bg-white rounded-md py-2 mt-2 text-[14px] font-medium text-slate-600 hover:bg-slate-50 transition"
            >
              <RotateCcw size={16} className="text-[#5b7ee5]" /> Повернутись у прийом
            </button>
          </>
        )}

        {/* Menu */}
        <nav className="mt-4">
          {patientMenu.map((item) => (
            <div key={item.id} className="border-b border-slate-100">
              <button
                onClick={() => handleMenu(item)}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-[14px] font-semibold transition ${
                  section === item.id
                    ? "text-[#5b7ee5] bg-[#eef2fc]"
                    : "text-slate-500 hover:bg-white/70"
                }`}
              >
                {item.label}
                {item.expandable && (
                  <ChevronDown
                    size={17}
                    className={`text-slate-400 transition-transform ${
                      open[item.id] ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {item.expandable && open[item.id] && (
                <div className="bg-white/50 pb-2">
                  {item.sub.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSection(subToSection(s))}
                      className={`w-full text-left pl-6 pr-3 py-2 text-[13.5px] transition ${
                        section === subToSection(s)
                          ? "text-[#5b7ee5] bg-[#eef2fc] font-semibold"
                          : "text-slate-500 hover:text-[#5b7ee5]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0">{renderMain()}</div>
    </div>
  );
};

export default PatientProfile;
