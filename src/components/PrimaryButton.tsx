import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Tombol utama pill amber, tinggi 52px, lebar penuh.
 * Teks amber.ink (#472a00) bold 13px + ikon panah kanan.
 * Saat `disabled`, tombol diredupkan dan tidak bisa diklik.
 */
export default function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="flex h-[52px] w-full items-center justify-center gap-2 rounded-pill bg-amber text-[13px] font-bold text-amber-ink transition-opacity active:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
      <ArrowRight className="size-4" />
    </button>
  );
}
