import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import TopNav from "../components/TopNav";
import StageLabel from "../components/StageLabel";
import Card from "../components/Card";
import Divider from "../components/Divider";
import DetailRow from "../components/DetailRow";
import StatusBadge from "../components/StatusBadge";
import QueueNumber from "../components/QueueNumber";
import Barcode from "../components/Barcode";
import ActionBar from "../components/ActionBar";
import PrimaryButton from "../components/PrimaryButton";

/** Halaman 08 — Tiket Antrean Diterbitkan. */
export default function TiketPage() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <TopNav variant="back" title="Tiket Antrean" onBack={() => navigate("/checkout")} />
      <StageLabel>08 / 11 · TIKET DITERBITKAN</StageLabel>

      <main className="flex min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto px-5 pb-3 pt-2.5">
        {/* Issued confirmation */}
        <div className="flex w-full items-start gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-pill bg-[#102a23]">
            <Check className="size-5 text-[#4edea3]" />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="font-display text-lg font-bold leading-[1.2] text-white">
              Tiket antrean diterbitkan!
            </p>
            <p className="text-xs leading-[1.5] text-muted">
              Simpan nomor ini untuk check-in di restoran.
            </p>
          </div>
        </div>

        {/* Ticket card */}
        <Card className="flex flex-col gap-4">
          <StatusBadge>ANTREAN AKTIF</StatusBadge>

          <div className="flex w-full flex-col gap-[5px]">
            <StatusBadge>VIP PARTNER</StatusBadge>
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

          <Divider />
          <QueueNumber label="Nomor Antrean Anda" code="A-072" />
          <p className="w-full text-center text-xs leading-[1.5] text-muted">
            Tunjukkan nomor ini saat dipanggil kasir.
          </p>

          <Divider />
          <Barcode code="TA-2026-0072" />
          <DetailRow label="Diterbitkan" value="23:58 · 23 Nov 2026" />
        </Card>

        <p className="w-full text-xs leading-[1.5] text-muted">
          Anda akan menerima notifikasi WhatsApp saat giliran mendekat.
        </p>
      </main>

      <ActionBar secondary="Pantau posisi antrean secara langsung.">
        <PrimaryButton onClick={() => navigate("/menunggu")}>
          Pantau Antrean Saya
        </PrimaryButton>
      </ActionBar>
    </MobileFrame>
  );
}
