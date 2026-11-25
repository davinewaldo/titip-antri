/**
 * Badge pill dengan titik status, mis. "PRIVILEGE DINING CONCIERGE".
 * Latar amber.badge gelap, titik + teks amber-soft, mono 10px.
 */
export default function StatusBadge({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-pill bg-amber-badge px-2.5 py-[5px]">
      <span className="size-[5px] shrink-0 rounded-pill bg-amber" />
      <span className="whitespace-nowrap font-mono text-[10px] font-bold text-amber-soft">
        {children}
      </span>
    </div>
  );
}
