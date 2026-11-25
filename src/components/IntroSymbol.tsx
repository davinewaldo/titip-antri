import type { ReactNode } from "react";

/**
 * Simbol kotak 64x64 amber gelap (#30220d) radius 16, berisi ikon 30px amber.
 * Dipakai di kepala halaman login & verifikasi OTP.
 */
export default function IntroSymbol({ children }: { children: ReactNode }) {
  return (
    <div className="grid size-16 place-items-center rounded-2xl bg-amber-badge text-amber">
      {children}
    </div>
  );
}
