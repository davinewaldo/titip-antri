/**
 * Field form: label abu 12px + input gelap (#1f1f22) border #27272a radius 8.
 * Sesuai desain Figma — input bertipe teks biasa, nilai putih 14px.
 */
export default function FormField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  inputMode,
}: {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  type?: string;
  inputMode?: "text" | "tel" | "numeric" | "email";
}) {
  return (
    <label className="flex w-full flex-col gap-[7px]">
      <span className="text-xs font-semibold leading-[1.5] text-muted">
        {label}
      </span>
      <input
        type={type}
        inputMode={inputMode}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-lg border border-line bg-[#1f1f22] p-[13px] text-sm leading-[1.5] text-white outline-none placeholder:text-muted focus:border-amber"
      />
    </label>
  );
}
