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
    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">{label}</label>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full bg-zinc-950/45 border rounded-xl p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-all font-mono text-sm ${
        error
          ? "border-red-500/50 focus:ring-red-500/30 focus:border-red-500"
          : "border-zinc-800/80 focus:ring-purple-500/30 focus:border-[#7f77dd]"
      }`}
    />
    {error && <p className="text-[10px] text-red-400 font-mono mt-0.5 ml-1">{error}</p>}
  </div>
);

export default GlassInput;
