import { Clock3, Ticket, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import TopNav from "../components/TopNav";
import StageLabel from "../components/StageLabel";
import StatusBadge from "../components/StatusBadge";
import ActionBar from "../components/ActionBar";
import PrimaryButton from "../components/PrimaryButton";
import heroPhoto from "/assets/restaurant-hero.png";

/** Kartu benefit "cara kerja" (ikon + label), 3 buah sejajar. */
function Benefit({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-start gap-2 rounded-card bg-surface p-3">
      <div className="size-5 text-amber">{icon}</div>
      <p className="text-[10px] font-semibold leading-normal text-white">
        {label}
      </p>
    </div>
  );
}

/** Halaman 01 — Masuk (layar sambutan). */
export default function MasukPage() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <TopNav variant="brand" />
      <StageLabel>01 / 11 · SELAMAT DATANG</StageLabel>

      {/* Content: scrollable, gap 16px, padding 20px */}
      <main className="flex min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto px-5 pb-3 pt-2.5">
        <StatusBadge>PRIVILEGE DINING CONCIERGE</StatusBadge>

        <h1 className="font-display text-[34px] font-extrabold leading-[1.12] text-white">
          Nikmati Kuliner Legendaris.
          <br />
          <span className="text-amber">Tanpa Antre Berdiri.</span>
        </h1>

        <p className="text-sm leading-[1.5] text-muted">
          Ambil nomor dari HP, pantau giliran, lalu datang santai ke restoran
          pilihan Anda.
        </p>

        <div className="h-[206px] w-full overflow-hidden rounded-card">
          <img
            src={heroPhoto}
            alt="Suasana restoran"
            className="size-full object-cover"
          />
        </div>

        <div className="flex w-full items-start gap-2">
          <Benefit icon={<Ticket className="size-5" />} label="Ambil tiket" />
          <Benefit
            icon={<Clock3 className="size-5" />}
            label="Pantau giliran"
          />
          <Benefit
            icon={<Utensils className="size-5" />}
            label="Datang & duduk"
          />
        </div>
      </main>

      <ActionBar secondary="Surabaya & Malang · Mitra restoran terverifikasi">
        <PrimaryButton onClick={() => navigate("/login")}>
          Masuk & Mulai Antre
        </PrimaryButton>
      </ActionBar>
    </MobileFrame>
  );
}
