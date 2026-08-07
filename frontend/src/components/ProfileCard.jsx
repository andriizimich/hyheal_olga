import React from "react";
import { useNavigate } from "react-router-dom";
import { doctor } from "../mock";
import { BadgeCheck } from "lucide-react";

const Detail = ({ label, value }) => (
  <span className="text-[13.5px] text-slate-500 leading-relaxed">
    <span className="font-semibold text-slate-600">{label}:</span> {value}
  </span>
);

const ProfileCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/doctor")}
      className="bg-white rounded-md border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.04)] px-5 py-4 mb-5 cursor-pointer hover:shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition-shadow"
    >
      <div className="flex items-start gap-4">
        <img
          src={doctor.avatar}
          alt={doctor.name}
          className="h-14 w-14 rounded-full object-cover shrink-0"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 mb-1.5">
            <h2 className="text-[16px] font-bold text-slate-800">{doctor.name}</h2>
            {doctor.verified && (
              <BadgeCheck size={18} className="text-[#5b7ee5] shrink-0" />
            )}
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-1">
            <Detail label="Посада" value={doctor.position} />
            <Detail label="Підрозділ" value={doctor.subdivision} />
            <Detail label="Групи" value={doctor.groups} />
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-1 mt-1">
            <span className="text-[13.5px] text-slate-500">{doctor.organization}</span>
            <Detail label="Тип" value={doctor.type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
