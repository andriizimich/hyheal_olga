import React, { useState } from "react";
import { Search } from "lucide-react";
import { toast } from "sonner";
import { patientResults } from "../mock";
import PatientResultCard from "./PatientResultCard";

const PatientsPage = () => {
  const [phone, setPhone] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birth, setBirth] = useState("");
  const [results, setResults] = useState([]);

  const handlePhoneSearch = () => {
    if (!phone.trim()) {
      toast("Пошук пацієнта", { description: "Введіть номер телефону" });
      setResults([]);
      return;
    }
    setResults(patientResults);
    toast("Знайдено пацієнтів", { description: `Результатів: ${patientResults.length}` });
  };

  const handleCardAction = (p) => {
    toast(p.esoz ? "Записати до лікаря" : "Зареєструвати в ЕСОЗ", {
      description: p.name,
    });
  };

  return (
    <div className="px-8 pt-3 pb-8 max-w-[1200px]">
      <h1 className="text-[28px] font-light text-slate-400 mb-3">Пацієнти</h1>

      {/* Phone search */}
      <div className="mb-4">
        <label className="block text-[15px] font-bold text-slate-600 mb-2">
          Пошук пацієнта за номером телефону в моєму медзакладі
        </label>
        <div className="flex max-w-[860px]">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handlePhoneSearch()}
            placeholder="+38 (__) ___-__-__"
            className="flex-1 h-12 rounded-l-md border border-slate-200 border-r-0 px-4 text-[15px] text-slate-600 focus:outline-none focus:border-[#5b7ee5]"
          />
          <button
            onClick={handlePhoneSearch}
            className="w-14 rounded-r-md border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-[#5b7ee5] hover:bg-slate-50 transition"
          >
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Identified patient search */}
      <div>
        <h2 className="text-[15px] font-bold text-slate-600 mb-2">
          Пошук ідентифікованого пацієнта
        </h2>

        <div className="rounded-md border border-slate-100 bg-slate-50/60 p-5">
          <p className="text-[15px] font-semibold text-slate-500 mb-4">
            Якщо пацієнта не знайдено, або немає телефону - уточніть пошук.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-[14px] font-semibold text-slate-600 mb-2">
                Прізвище <span className="text-[#e85b5b]">*</span>
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full h-11 rounded-md border border-slate-200 bg-white px-3 text-[14px] text-slate-600 focus:outline-none focus:border-[#5b7ee5]"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold text-slate-600 mb-2">
                Ім'я <span className="text-[#e85b5b]">*</span>
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full h-11 rounded-md border border-slate-200 bg-white px-3 text-[14px] text-slate-600 focus:outline-none focus:border-[#5b7ee5]"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold text-slate-600 mb-2">
                Дата народження <span className="text-[#e85b5b]">*</span>
              </label>
              <input
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                placeholder="__.__.____"
                className="w-full h-11 rounded-md border border-slate-200 bg-white px-3 text-[14px] text-slate-600 focus:outline-none focus:border-[#5b7ee5]"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 mt-5">
            <button
              onClick={() => toast("Розширений пошук", { description: "Розділ у розробці" })}
              className="text-[15px] font-medium text-[#5b7ee5] hover:underline"
            >
              Розширений пошук
            </button>
            <button
              onClick={() =>
                toast("Знайти неідентифікованого пацієнта", { description: "Розділ у розробці" })
              }
              className="text-[15px] font-medium text-[#5b7ee5] hover:underline"
            >
              Знайти неідентифікованого пацієнта
            </button>
          </div>
        </div>
      </div>

      {/* Search results */}
      {results.length > 0 && (
        <div className="mt-10">
          <h2 className="text-[17px] font-bold text-slate-600 mb-4">
            Результати пошуку
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {results.map((p) => (
              <PatientResultCard key={p.id} p={p} onAction={handleCardAction} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientsPage;
