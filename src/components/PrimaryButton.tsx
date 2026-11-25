import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Tombol utama pill amber, tinggi 52px, lebar penuh.
 * Teks amber.ink (#472a00) bold 13px + ikon panah kanan.
 */
export default function PrimaryButton({
  children,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex h-[52px] w-full items-center justify-center gap-2 rounded-pill bg-amber text-[13px] font-bold text-amber-ink transition-opacity active:opacity-80"
    >
      {children}
      <ArrowRight className="size-4" />
    </button>
  );
}
