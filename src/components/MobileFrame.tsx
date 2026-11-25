import type { ReactNode } from "react";

/**
 * Bingkai mobile 390x844 sesuai frame Figma.
 * Semua layar TitipAntri memakai pola tetap:
 *   Navigation (64) -> Stage (35) -> Content (flex, scroll) -> Actions (118).
 * Komponen ini hanya menyediakan bingkai + susunan kolom vertikal.
 */
export default function MobileFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full justify-center bg-black">
      <div className="flex h-[844px] w-full max-w-frame flex-col overflow-hidden bg-ink text-white">
        {children}
      </div>
    </div>
  );
}
