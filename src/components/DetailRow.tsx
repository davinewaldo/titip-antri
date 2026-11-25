import type { ReactNode } from "react";

/** Baris detail: label abu kiri, nilai kanan (default putih). */
export default function DetailRow({
  label,
  value,
  valueClass = "text-white",
}: {
  label: string;
  value: ReactNode;
  valueClass?: string;
}) {
  return (
    <div className="flex w-full items-center gap-3 text-xs leading-[1.5]">
      <span className="flex-1 text-muted">{label}</span>
      <span className={`font-semibold ${valueClass}`}>{value}</span>
    </div>
  );
}
