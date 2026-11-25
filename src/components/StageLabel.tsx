/**
 * Label tahap di bawah navigation, mis. "01 / 11 · SELAMAT DATANG".
 * Mono, amber-soft, 10px, uppercase (teks sudah uppercase dari sumber).
 */
export default function StageLabel({ children }: { children: string }) {
  return (
    <div className="flex w-full shrink-0 items-start px-5 pb-1.5 pt-4">
      <p className="whitespace-nowrap font-mono text-[10px] font-bold text-amber-soft">
        {children}
      </p>
    </div>
  );
}
