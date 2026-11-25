import type { ReactNode } from "react";

/**
 * Area aksi bawah 118px: border atas, tombol utama + teks sekunder di tengah.
 */
export default function ActionBar({
  children,
  secondary,
}: {
  children: ReactNode;
  secondary?: ReactNode;
}) {
  return (
    <div className="flex w-full shrink-0 flex-col gap-3 border-t border-line bg-ink px-5 pb-6 pt-3">
      {children}
      {secondary ? (
        <p className="w-full text-center text-xs text-muted">{secondary}</p>
      ) : null}
    </div>
  );
}
