import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import TopNav from "../components/TopNav";
import StageLabel from "../components/StageLabel";
import Divider from "../components/Divider";
import DetailRow from "../components/DetailRow";
import StatusBadge from "../components/StatusBadge";
import ActionBar from "../components/ActionBar";
import PrimaryButton from "../components/PrimaryButton";
import tablePhoto from "/assets/resto-detail.png";

/** Halaman 11 — Check-in Berhasil & Menuju Meja. */
export default function CheckinPage() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <TopNav variant="back" title="Check-in Berhasil" onBack={() => navigate("/dipanggil")} />
      <StageLabel>11 / 11 · CHECK-IN BERHASIL</StageLabel>

      <main className="flex min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto px-5 pb-3 pt-2.5">
        {/* Check-in confirmation */}
        <div className="flex w-full flex-col items-center gap-3 pt-1 text-center">
          <StatusBadge>CHECK-IN TERKONFIRMASI</StatusBadge>
          <div className="grid size-[54px] place-items-center rounded-pill bg-[#102a23]">
            <Check className="size-7 text-[#4edea3]" />
          </div>
          <p className="font-display text-2xl font-bold leading-[1.2] text-white">
            Selamat menikmati!
          </p>
          <p className="text-xs leading-[1.5] text-muted">
            Antrean selesai. Silakan menuju meja yang telah disiapkan untuk
            Anda.
          </p>
        </div>

        {/* Assigned table card */}
        <div className="flex w-full flex-col overflow-hidden rounded-card bg-surface">
          <div className="h-[118px] w-full overflow-hidden">
            <img src={tablePhoto} alt="De Soematra 1897" className="size-full object-cover" />
          </div>
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-1">
              <p className="font-display text-xl font-bold leading-[1.2] text-white">
                De Soematra 1897
              </p>
              <p className="text-[11px] leading-[1.5] text-muted">
                Indoor AC Main Hall
              </p>
            </div>

            {/* Assigned table */}
            <div className="flex flex-col gap-1 rounded-card bg-amber-badge p-3.5">
              <span className="text-[11px] leading-[1.5] text-muted">
                Meja Anda
              </span>
              <span className="font-display text-[28px] font-bold leading-none text-amber">
                Meja 14
              </span>
              <span className="text-xs leading-[1.5] text-muted">
                Dekat jendela · kapasitas 4 tamu
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              <DetailRow label="Dilayani oleh" value="Rama (Head Waiter)" />
              <DetailRow label="Waktu check-in" value="00:02 · 24 Nov 2026" />
              <Divider />
              <p className="text-xs leading-[1.5] text-muted">
                Tunjukkan layar ini bila petugas memerlukan verifikasi.
              </p>
            </div>
          </div>
        </div>
      </main>

      <ActionBar secondary="Terima kasih telah menggunakan TitipAntri.">
        <PrimaryButton onClick={() => navigate("/")}>
          Selesai & Kembali ke Beranda
        </PrimaryButton>
      </ActionBar>
    </MobileFrame>
  );
}
