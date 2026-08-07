import React from "react";
import { CircleCheck, RotateCw, Clock, Pencil, Info, Minus } from "lucide-react";

const SectionTitle = ({ children }) => (
  <h3 className="text-[18px] font-bold text-[#5b7ee5] mt-8 mb-3 pb-2 border-b-2 border-[#5b7ee5]/30">
    {children}
  </h3>
);

const UnderField = ({ label, value, icon }) => (
  <div>
    <p className="text-[14px] font-bold text-slate-600 mb-1.5">{label}</p>
    <div className="flex items-center gap-2 border-b border-slate-200 pb-1.5">
      <span className="text-[15px] text-slate-500 flex-1">{value}</span>
      {icon && (
        <button className="h-8 w-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">
          {icon}
        </button>
      )}
    </div>
  </div>
);

const Row = ({ cells, highlight, header }) => (
  <div
    className={`grid gap-4 px-3 py-3 text-[14px] ${
      header
        ? "text-slate-500 font-semibold bg-slate-50 border-b border-slate-100"
        : "text-slate-500 border-b border-slate-100"
    } ${highlight ? "bg-[#eef4ff]" : ""}`}
    style={{ gridTemplateColumns: `repeat(${cells.length}, minmax(0,1fr))` }}
  >
    {cells.map((c, i) => (
      <span key={i} className="flex items-center gap-1.5">{c}</span>
    ))}
  </div>
);

const Empty = ({ text }) => (
  <div className="px-3 py-4 text-[14px] text-slate-400 text-right border-b border-slate-100">
    {text}
  </div>
);

const ProfileView = ({ p }) => {
  const genderShort = p.gender === "male" ? "Чол" : "Жін";
  return (
    <div className="p-6 bg-white">
      <h1 className="text-[22px] font-bold text-slate-800 mb-5">
        Профіль: {p.name}
      </h1>

      {/* Consent row */}
      <div className="flex flex-wrap items-center gap-8 mb-5">
        <span className="text-[15px] font-semibold text-slate-500">
          Згода на обробку персональних даних:
        </span>
        <span className="flex items-center gap-2 text-[15px] text-slate-600">
          <CircleCheck size={20} className="text-[#3fb984]" /> Бланк
        </span>
        <span className="flex items-center gap-2 text-[15px] text-slate-600">
          <RotateCw size={20} className="text-[#5b7ee5]" /> Веб
        </span>
      </div>

      {/* ESOZ card */}
      <div className="border border-slate-100 border-l-[5px] border-l-[#3fb984] rounded-md p-5 mb-2">
        <span className="inline-block bg-[#3fb984] text-white text-[13px] font-semibold rounded px-3 py-1 mb-3">
          Діюча
        </span>
        <h2 className="text-[20px] font-bold text-slate-700">Реєстрація в ЕСОЗ</h2>
      </div>

      {/* Personal data */}
      <SectionTitle>Персональні дані</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
        <UnderField label="Прізвище" value={p.name.split(" ")[0]} icon={<Clock size={16} />} />
        <UnderField label="Ім'я" value={p.name.split(" ")[1] || "Анна"} />
        <UnderField label="Стать" value={genderShort} />
        <UnderField label="Дата народження" value={p.birth} />
        <UnderField label="Місце народження" value="місто Київ" />
        <UnderField label="РНОКПП (ІПН)" value="3456789012" />
      </div>

      {/* Contacts */}
      <SectionTitle>Контактна інформація</SectionTitle>
      <div className="rounded-md border border-slate-100 overflow-hidden">
        <div className="px-3 py-3 text-[14px] font-semibold text-slate-500 bg-slate-50 border-b border-slate-100">
          Тип контакту
        </div>
        <div className="flex items-center gap-2 px-3 py-2.5 text-[14px] font-bold text-slate-700 border-b border-slate-100">
          <Minus size={14} className="text-slate-400" /> Телефон
        </div>
        <Row header cells={["Номер", "Тип"]} />
        <Row cells={[p.phone, "Основний, для входу в кабінет пацієнта"]} />
        <Row
          highlight
          cells={[
            p.phone,
            <>Для контактної інформації в ЕСОЗ <Info size={14} className="text-[#5b7ee5]" /></>,
          ]}
        />
        <div className="flex items-center gap-2 px-3 py-2.5 text-[14px] font-bold text-slate-700 border-b border-slate-100">
          <Minus size={14} className="text-slate-400" /> Email
        </div>
        <Row header cells={["Електронна адреса", "Тип"]} />
        <Row cells={["annan9552@gmail.com", "Основний"]} />
      </div>

      {/* Identity documents */}
      <SectionTitle>Документи, що посвідчують особу</SectionTitle>
      <div className="rounded-md border border-slate-100 overflow-hidden">
        <Row header cells={["Тип", "Ким виданий", "Виданий"]} />
        <Row
          cells={[
            "Паспорт громадянина України",
            "Києво-Святошинським РВ УДМС України",
            "28-08-2015",
          ]}
        />
      </div>

      {/* Benefit categories */}
      <SectionTitle>Пільгові категорії</SectionTitle>
      <div className="rounded-md border border-slate-100 overflow-hidden">
        <Row header cells={["Категорія", "Група", "Ким виданий", "Виданий з"]} />
        <Empty text="Пільгові категорії ще не додано" />
      </div>

      {/* Addresses */}
      <SectionTitle>Адреси</SectionTitle>
      <div className="rounded-md border border-slate-100 overflow-hidden">
        <Row header cells={["Тип адреси", "Адреси"]} />
        <Row cells={["Адреса проживання", "місто Київ вул. Западинська, 5А"]} />
      </div>

      {/* Workplace */}
      <SectionTitle>Місце роботи</SectionTitle>
      <div className="rounded-md border border-slate-100 overflow-hidden">
        <Row header cells={["Тип", "Назва"]} />
        <Empty text="Місце роботи ще не додано" />
      </div>

      {/* Emergency contact */}
      <SectionTitle>Контактна особа на випадок екстреної ситуації</SectionTitle>
      <div className="rounded-md border border-slate-100 overflow-hidden">
        <Row header cells={["Тип", "ПІБ пацієнта"]} />
        <Row cells={["Контактна особа", "Ніцос Олена Іванівна"]} />
      </div>

      {/* Preferred contact */}
      <div className="mt-8 max-w-md">
        <p className="text-[14px] font-bold text-slate-600 mb-1.5">
          Бажаний спосіб зв'язку
        </p>
        <div className="flex items-center gap-2 border-b border-slate-200 pb-1.5">
          <span className="text-[15px] text-slate-500 flex-1">Телефон</span>
          <button className="h-8 w-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">
            <Pencil size={15} />
          </button>
        </div>
      </div>

      {/* Auth methods */}
      <SectionTitle>Основні методи автентифікації пацієнта</SectionTitle>
      <div className="flex flex-wrap items-center gap-4">
        <div className="h-11 min-w-[280px] rounded-md border border-slate-200 bg-slate-50 px-4 flex items-center text-[15px] text-slate-500">
          Телефон: 095*****59
        </div>
        <button className="h-11 rounded-md border border-slate-200 px-5 text-[14px] font-semibold text-slate-600 hover:bg-slate-50 transition">
          Змінити метод автентифікації
        </button>
      </div>
    </div>
  );
};

export default ProfileView;
