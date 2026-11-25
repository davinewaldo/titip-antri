import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import TopNav from "../components/TopNav";
import StageLabel from "../components/StageLabel";
import Card from "../components/Card";
import Divider from "../components/Divider";
import StatusBadge from "../components/StatusBadge";
import QueueNumber from "../components/QueueNumber";
import InfoBox from "../components/InfoBox";
import ActionBar from "../components/ActionBar";
import PrimaryButton from "../components/PrimaryButton";

/** Metrik antrean langsung (2 kolom). */
function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-1 flex-col gap-2 rounded-card bg-surface p-3.5">
      <span className="text-[11px] leading-[1.2] text-muted">{label}</span>
      <span className="font-display text-2xl font-bold text-white">{value}</span>
    </div>
  );
}

/** Halaman 09 — Menunggu Antrean. */
export default function MenungguPage() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <TopNav variant="back" title="Antrean Saya" onBack={() => navigate("/tiket")} />
      <StageLabel>09 / 11 · MENUNGGU ANTREAN</StageLabel>

      <main className="flex min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto px-5 pb-3 pt-2.5">
        <StatusBadge>MENUNGGU GILIRAN</StatusBadge>

        <h1 className="w-full font-display text-[26px] font-bold leading-[1.2] text-white">
          Giliran Anda semakin dekat.
        </h1>

        {/* Queue card */}
        <Card className="flex flex-col gap-4">
          <div className="flex w-full flex-col gap-[5px]">
            <StatusBadge>VIP PARTNER</StatusBadge>
            <p className="font-display text-xl font-bold leading-[1.2] text-white">
              De Soematra 1897
            </p>
            <p className="text-xs leading-[1.5] text-muted">
              4 tamu · Indoor AC Main Hall
            </p>
          </div>

          <Divider />
          <QueueNumber label="Nomor Antrean Anda" code="A-072" />

          {/* Progress */}
          <div className="h-[5px] w-full overflow-hidden rounded-pill bg-[#1f1f22]">
            <div className="h-full rounded-pill bg-amber" style={{ width: "60%" }} />
          </div>
          <p className="w-full text-xs leading-[1.5] text-muted">
            Estimasi giliran Anda sekitar 8 menit lagi.
          </p>
        </Card>

        {/* Live metrics */}
        <div className="flex w-full items-start gap-3">
          <Metric label="Antrean di depan Anda" value="3" />
          <Metric label="Estimasi tunggu" value="±8 mnt" />
        </div>

        <InfoBox title="Tetap di sekitar restoran">
          Datang lebih awal agar tidak melewatkan panggilan. Nomor hangus bila
          tidak konfirmasi dalam 5 menit.
        </InfoBox>
      </main>

      <ActionBar secondary="Notifikasi WhatsApp aktif untuk nomor ini.">
        <PrimaryButton onClick={() => navigate("/dipanggil")}>
          Lihat Status Panggilan
        </PrimaryButton>
      </ActionBar>
    </MobileFrame>
  );
}
