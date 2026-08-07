import React from "react";
import { Video, HelpCircle, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { doctor } from "../mock";

const TopHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between pr-6 shrink-0 relative z-20">
      {/* Logo */}
      <div className="w-[68px] flex items-center justify-center">
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center"
        >
          <img
            src="https://customer-assets-jt897jd0.emergentagent.net/job_crm-dashboard-ui-2/artifacts/3fs31ky3_Group%2033920.png"
            alt="MyHeal"
            className="h-9 w-9 object-contain"
          />
        </button>
      </div>
      <div className="flex-1" />

      {/* Right actions */}
      <div className="flex items-center gap-5">
        <button className="text-slate-400 hover:text-[#5b7ee5] transition-colors">
          <Video size={22} strokeWidth={1.7} />
        </button>
        <button className="text-slate-400 hover:text-[#5b7ee5] transition-colors">
          <HelpCircle size={22} strokeWidth={1.7} />
        </button>
        <button className="relative text-slate-400 hover:text-[#5b7ee5] transition-colors">
          <Bell size={22} strokeWidth={1.7} />
          <span className="absolute -top-1.5 -right-1.5 h-4 min-w-4 px-1 rounded-full bg-[#f0642c] text-white text-[10px] font-semibold flex items-center justify-center">
            1
          </span>
        </button>
        <button className="ml-1" onClick={() => navigate("/doctor")}>
          <img
            src={doctor.avatar}
            alt={doctor.name}
            className="h-9 w-9 rounded-full object-cover ring-2 ring-slate-100 hover:ring-[#5b7ee5] transition-all"
          />
        </button>
      </div>
    </header>
  );
};

export default TopHeader;
