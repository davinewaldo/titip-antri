import { useState } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import TopNav from "../components/TopNav";
import StageLabel from "../components/StageLabel";
import Card from "../components/Card";
import Divider from "../components/Divider";
import DetailRow from "../components/DetailRow";
import StatusBadge from "../components/StatusBadge";
import ActionBar from "../components/ActionBar";
import PrimaryButton from "../components/PrimaryButton";

/** Badge hijau "VIP PARTNER" (sesuai revisi Figma Page 7). */
function GreenBadge({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-pill bg-[#102a23] px-2.5 py-[5px]">
      <span className="size-[5px] shrink-0 rounded-pill bg-[#4edea3]" />
      <span className="whitespace-nowrap font-mono text-[10px] font-bold text-[#4edea3]">
        {children}
      </span>
    </div>
  );
}

/** Halaman 07 — Checkout (layanan antrean digital gratis). */
export default function CheckoutPage() {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(true);

  return (
    <MobileFrame>
      <TopNav variant="back" title="Checkout" onBack={() => navigate("/pemesan")} />
      <StageLabel>07 / 11 · CHECKOUT</StageLabel>

      <main className="flex min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto px-5 pb-3 pt-2.5">
        <h1 className="w-full font-display text-[26px] font-bold leading-[1.2] text-white">
          Satu langkah lagi untuk antre.
        </h1>

        {/* Ringkasan restoran + pemesan */}
        <Card className="flex flex-col gap-3">
          <div className="flex w-full flex-col gap-[5px]">
            <GreenBadge>VIP PARTNER</GreenBadge>
            <p className="font-display text-xl font-bold leading-[1.2] text-white">
              De Soematra 1897
            </p>
            <p className="text-xs leading-[1.5] text-muted">
              4 tamu · Indoor AC Main Hall
            </p>
          </div>
          <Divider />
          <DetailRow label="Pemesan" value="Budi Santoso" />
        </Card>

        <p className="w-full text-xs leading-[1.5] text-muted">
          Hanya layanan antrean digital. Makanan dan minuman dipesan serta
          dibayar di restoran.
        </p>

        {/* Consent */}
        <button
          type="button"
          onClick={() => setAgree((v) => !v)}
          className="flex w-full items-start gap-2.5 text-left"
        >
          <span
            className={`grid size-5 shrink-0 place-items-center rounded-[4px] ${
              agree ? "bg-amber" : "border border-line bg-transparent"
            }`}
          >
            {agree ? <Check className="size-3.5 text-amber-ink" /> : null}
          </span>
          <span className="flex-1 text-[11px] leading-[1.6] text-muted">
            Saya menyetujui{" "}
            <span className="text-amber-soft underline">
              Syarat &amp; Kebijakan Layanan
            </span>{" "}
            serta ketentuan konfirmasi di kasir dalam 5 menit setelah dipanggil.
          </span>
        </button>
      </main>

      <ActionBar secondary="Tidak ada pembayaran untuk layanan promo ini.">
        <PrimaryButton onClick={() => navigate("/tiket")}>
          Konfirmasi &amp; Terbitkan Tiket
        </PrimaryButton>
      </ActionBar>
    </MobileFrame>
  );
}
