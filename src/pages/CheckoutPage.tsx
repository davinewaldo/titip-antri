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

/**
 * Halaman 07 — Checkout.
 * Struktur & label dari metadata Figma; nilai biaya mengikuti konteks
 * layanan antrean (disamakan persis saat detail Figma tersedia kembali).
 */
export default function CheckoutPage() {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(true);

  return (
    <MobileFrame>
      <TopNav variant="back" title="Checkout" onBack={() => navigate("/pemesan")} />
      <StageLabel>07 / 11 · CHECKOUT</StageLabel>

      <main className="flex min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto px-5 pb-3 pt-2.5">
        <h1 className="w-full font-display text-[26px] font-bold leading-[1.2] text-white">
          Selesaikan pemesanan antrean Anda.
        </h1>

        {/* Ringkasan restoran */}
        <Card>
          <div className="flex w-full flex-col gap-[5px]">
            <StatusBadge>VIP PARTNER</StatusBadge>
            <p className="font-display text-xl font-bold leading-[1.2] text-white">
              De Soematra 1897
            </p>
            <p className="text-xs leading-[1.5] text-muted">
              4 tamu · Indoor AC Main Hall
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <Divider />
            <DetailRow label="Estimasi antrean" value="15–20 menit" valueClass="text-amber-soft" />
          </div>
        </Card>

        {/* Rincian biaya */}
        <Card>
          <p className="mb-3 font-display text-base font-bold text-white">
            Rincian Biaya
          </p>
          <div className="flex flex-col gap-2.5">
            <DetailRow label="Biaya layanan antrean" value="Rp 25.000" />
            <DetailRow label="Biaya aplikasi" value="Rp 2.000" />
            <DetailRow label="PPN 11%" value="Rp 2.970" />
            <Divider />
            <div className="flex w-full items-center">
              <span className="flex-1 text-sm text-muted">Total pembayaran</span>
              <span className="font-display text-xl font-bold text-amber">
                Rp 29.970
              </span>
            </div>
            <div className="mt-2">
              <StatusBadge>PEMBAYARAN SAAT CHECK-IN</StatusBadge>
            </div>
          </div>
        </Card>

        <p className="w-full text-xs leading-[1.5] text-muted">
          Biaya hanya ditagih setelah Anda berhasil check-in di restoran.
          Pembatalan sebelum nomor dipanggil tidak dikenai biaya.
        </p>

        {/* Consent */}
        <button
          type="button"
          onClick={() => setAgree((v) => !v)}
          className="flex w-full items-start gap-2.5 text-left"
        >
          <span
            className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-[6px] border ${
              agree ? "border-amber bg-amber" : "border-line bg-transparent"
            }`}
          >
            {agree ? <Check className="size-3.5 text-amber-ink" /> : null}
          </span>
          <span className="text-xs leading-[1.5] text-muted">
            Saya menyetujui Syarat Layanan & Kebijakan Antrean TitipAntri.
          </span>
        </button>
      </main>

      <ActionBar secondary="Nomor antrean diterbitkan setelah konfirmasi.">
        <PrimaryButton onClick={() => navigate("/tiket")}>
          Terbitkan Tiket Antrean
        </PrimaryButton>
      </ActionBar>
    </MobileFrame>
  );
}
