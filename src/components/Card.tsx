import type { ReactNode } from "react";

/**
 * Kartu dasar: latar #18181b, border #27272a, radius 12, padding 16.
 * Dipakai di banyak halaman (form login, OTP, ringkasan, checkout, tiket).
 */
export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full rounded-card border border-line bg-surface p-4 ${className}`}
    >
      {children}
    </div>
  );
}
