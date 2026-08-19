import React from "react";

const GlassInput = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-mono text-[#667386] uppercase tracking-widest ml-1">{label}</label>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full bg-[#080B10] border rounded-xl p-4 text-[#F1F5F9] placeholder:text-[#667386] focus:outline-none focus:ring-1 transition-all font-mono text-sm ${
        error
          ? "border-[#F43F5E]/50 focus:ring-[#F43F5E]/30 focus:border-[#F43F5E]"
          : "border-[#1C2633] focus:ring-[#3B82F6]/30 focus:border-[#3B82F6]"
      }`}
    />
    {error && <p className="text-[10px] text-[#F43F5E] font-mono mt-0.5 ml-1">{error}</p>}
  </div>
);

export default GlassInput;
