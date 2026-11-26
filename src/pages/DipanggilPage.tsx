import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import TopNav from "../components/TopNav";
import StageLabel from "../components/StageLabel";
import Card from "../components/Card";
import StatusBadge from "../components/StatusBadge";
import QueueNumber from "../components/QueueNumber";
import Barcode from "../components/Barcode";
import ActionBar from "../components/ActionBar";
import PrimaryButton from "../components/PrimaryButton";
import { useBooking } from "../store/BookingContext";
import { useCountdown } from "../hooks/useCountdown";

/** Halaman 10 — Nomor Dipanggil & Konfirmasi ke Kasir (countdown berjalan). */
export default function DipanggilPage() {
  const navigate = useNavigate();
  const booking = useBooking();
  // Batas konfirmasi 5 menit, berjalan mundur
  const { seconds, label } = useCountdown(5 * 60);
  const expired = seconds <= 0;

  return (
    <MobileFrame>
      <TopNav variant="back" title="Giliran Anda" onBack={() => navigate("/menunggu")} />
      <StageLabel>10 / 11 · NOMOR DIPANGGIL</StageLabel>

      <main className="flex min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto px-5 pb-3 pt-2.5">
        <StatusBadge>{expired ? "WAKTU HABIS" : "NOMOR ANDA DIPANGGIL"}</StatusBadge>

        <h1 className="w-full font-display text-[26px] font-bold leading-[1.2] text-white">
          {expired ? "Waktu konfirmasi habis." : "Segera konfirmasi ke kasir."}
        </h1>

        {/* Countdown card */}
        <Card>
          <div className="flex w-full items-center gap-4">
            <div
              className={`grid size-[76px] shrink-0 place-items-center rounded-pill border-2 ${
                expired ? "border-line" : "border-amber"
              }`}
            >
              <span
                className={`font-display text-2xl font-bold ${
                  expired ? "text-muted" : "text-amber"
                }`}
              >
                {label}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-xs leading-[1.5] text-muted">Batas konfirmasi</p>
              <p className="text-sm leading-[1.5] text-white">
                {expired
                  ? "Nomor Anda hangus. Silakan ambil antrean baru."
                  : "Tunjukkan tiket ke kasir sebelum waktu habis agar nomor tidak hangus."}
              </p>
            </div>
          </div>
        </Card>

        {/* Ticket card */}
        <Card className="flex flex-col gap-4">
          <div className="flex w-full flex-col gap-[5px]">
            <StatusBadge>VIP PARTNER</StatusBadge>
            <p className="font-display text-xl font-bold leading-[1.2] text-white">
              {booking.restaurant.name}
            </p>
            <p className="text-xs leading-[1.5] text-muted">
              {booking.guestCount} tamu · Indoor AC Main Hall
            </p>
          </div>

          <QueueNumber label="Nomor Antrean Anda" code={booking.queueCode} />
          <Barcode code={booking.ticketId} />
        </Card>

        <p className="w-full text-xs leading-[1.5] text-muted">
          Scan barcode di kasir untuk check-in otomatis.
        </p>
      </main>

      <ActionBar secondary="Petugas akan mengarahkan Anda ke meja.">
        <PrimaryButton onClick={() => navigate("/checkin")} disabled={expired}>
          {expired ? "Nomor hangus" : "Saya Sudah di Kasir"}
        </PrimaryButton>
      </ActionBar>
    </MobileFrame>
  );
}
