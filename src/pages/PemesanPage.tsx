import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import TopNav from "../components/TopNav";
import StageLabel from "../components/StageLabel";
import Card from "../components/Card";
import FormField from "../components/FormField";
import InfoBox from "../components/InfoBox";
import ActionBar from "../components/ActionBar";
import PrimaryButton from "../components/PrimaryButton";

/** Badge hijau "VIP PARTNER" dsb. */
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

/** Badge amber kecil (mono), mis. "AUTOFILL AKUN". */
function AmberBadge({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-pill bg-amber-badge px-2.5 py-[5px]">
      <span className="size-[5px] shrink-0 rounded-pill bg-amber" />
      <span className="whitespace-nowrap font-mono text-[10px] font-bold text-amber-soft">
        {children}
      </span>
    </div>
  );
}

/** Halaman 06 — Data Pemesan & Konfirmasi. */
export default function PemesanPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("Budi Santoso");
  const [phone, setPhone] = useState("+62 812-9883-4120");
  const [note, setNote] = useState("Perayaan ulang tahun kecil & 1 high chair anak.");

  return (
    <MobileFrame>
      <TopNav variant="back" title="Konfirmasi Antrean" onBack={() => navigate("/detail")} />
      <StageLabel>06 / 11 · DATA PEMESAN</StageLabel>

      <main className="flex min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto px-5 pb-3 pt-2.5">
        {/* Restaurant summary */}
        <Card>
          <div className="flex w-full flex-col gap-[5px]">
            <GreenBadge>VIP PARTNER</GreenBadge>
            <p className="font-display text-xl font-bold leading-[1.2] text-white">
              De Soematra 1897
            </p>
            <p className="text-[11px] leading-[1.5] text-muted">
              Jl. Sumatera No.88, Gubeng, Surabaya
            </p>
            <p className="text-xs leading-[1.5] text-muted">
              4 tamu · Indoor AC Main Hall
            </p>
          </div>
        </Card>

        {/* Customer form */}
        <div className="flex w-full flex-col gap-3.5">
          <div className="flex w-full items-center justify-between">
            <p className="flex-1 font-display text-xl font-bold leading-[1.2] text-white">
              Data Pemesan
            </p>
            <AmberBadge>AUTOFILL AKUN</AmberBadge>
          </div>

          <FormField label="Nama lengkap" value={name} onChange={setName} />
          <FormField
            label="Nomor WhatsApp aktif"
            value={phone}
            onChange={setPhone}
            inputMode="tel"
          />
          <p className="w-full text-[11px] leading-[1.5] text-[#4edea3]">
            ✓ Terverifikasi · Notifikasi WhatsApp aktif
          </p>
          <FormField
            label="Catatan khusus (opsional)"
            value={note}
            onChange={setNote}
          />
        </div>

        <InfoBox title="Ketentuan kedatangan">
          Konfirmasi di kasir maksimal 5 menit setelah nomor Anda dipanggil.
          Pastikan Anda sudah berada di sekitar restoran.
        </InfoBox>
      </main>

      <ActionBar secondary="Periksa kembali data sebelum melanjutkan.">
        <PrimaryButton onClick={() => navigate("/checkout")}>
          Lanjut ke Checkout
        </PrimaryButton>
      </ActionBar>
    </MobileFrame>
  );
}
