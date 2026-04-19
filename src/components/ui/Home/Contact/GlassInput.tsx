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
    <label className="text-sm font-medium text-gray-400 ml-1">{label}</label>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full bg-white/5 border rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 transition-all resize-none ${
        error
          ? "border-red-400 focus:ring-red-400 focus:border-0"
          : "border-white/10 focus:ring-white/20"
      }`}
    />
    {error ? <p className="m-0 p-0 text-xs text-red-400">{error}</p> : null}
  </div>
);

export default GlassInput;
