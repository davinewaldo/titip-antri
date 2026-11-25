import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import TopNav from "../components/TopNav";
import StageLabel from "../components/StageLabel";
import StatusBadge from "../components/StatusBadge";
import ActionBar from "../components/ActionBar";
import PrimaryButton from "../components/PrimaryButton";
import featured from "/assets/resto-featured.png";
import alt from "/assets/resto-alt.png";

const categories = [
  { label: "Semua (22)", active: true },
  { label: "Fine Dining", active: false },
  { label: "Kuliner Legenda", active: false },
];

/** Halaman 04 — Eksplor Restoran. */
export default function EksplorPage() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <TopNav variant="brand" />
      <StageLabel>04 / 11 · EKSPLOR RESTORAN</StageLabel>

      <main className="flex min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto px-5 pb-3 pt-2.5">
        {/* Location filter */}
        <div className="flex w-full items-start gap-2">
          <StatusBadge>SURABAYA</StatusBadge>
          <StatusBadge>MALANG</StatusBadge>
        </div>

        <h1 className="w-full font-display text-[26px] font-bold leading-[1.2] text-white">
          Mau makan di mana hari ini?
        </h1>

        {/* Search */}
        <div className="flex w-full items-center gap-2.5 rounded-card bg-[#1f1f22] p-[13px]">
          <Search className="size-[17px] shrink-0 text-muted" />
          <span className="flex-1 text-xs leading-[1.5] text-muted">
            Cari restoran atau kuliner favorit...
          </span>
        </div>

        {/* Categories */}
        <div className="flex w-full items-start gap-2">
          {categories.map((c) => (
            <span
              key={c.label}
              className={`whitespace-nowrap rounded-pill px-2.5 py-[7px] text-[10px] font-semibold ${
                c.active ? "bg-amber text-amber-ink" : "bg-surface text-muted"
              }`}
            >
              {c.label}
            </span>
          ))}
        </div>

        {/* Featured restaurant */}
        <div className="flex w-full flex-col overflow-hidden rounded-card bg-surface">
          <div className="h-[142px] w-full overflow-hidden rounded-card">
            <img src={featured} alt="De Soematra 1897" className="size-full object-cover" />
          </div>
          <div className="flex w-full flex-col gap-[7px] p-3.5">
            <div className="flex w-full items-center gap-3 text-xs leading-[1.5]">
              <span className="flex-1 text-muted">HERITAGE FINE DINING</span>
              <span className="font-semibold text-amber-soft">★ 4.9</span>
            </div>
            <p className="w-full font-display text-[21px] font-bold leading-[1.2] text-white">
              De Soematra 1897
            </p>
            <p className="w-full text-[11px] leading-[1.5] text-muted">
              Gubeng, Surabaya · $$$$
            </p>
            <div className="flex w-full items-center gap-3 text-xs leading-[1.5]">
              <span className="flex-1 text-muted">Estimasi antrean</span>
              <span className="font-semibold text-amber-soft">15–20 menit</span>
            </div>
          </div>
        </div>

        {/* Alternative restaurant */}
        <div className="flex w-full items-start gap-3 rounded-card bg-surface p-2.5">
          <div className="h-[62px] w-[65px] shrink-0 overflow-hidden rounded-card">
            <img src={alt} alt="1914 Surabaya" className="size-full object-cover" />
          </div>
          <div className="flex flex-1 flex-col gap-1 leading-[1.5]">
            <p className="w-full text-xs font-semibold text-white">
              1914 Surabaya (The Consulate)
            </p>
            <p className="w-full text-[11px] text-muted">
              ★ 4.8 · 6 antrean · ±25 menit
            </p>
          </div>
        </div>
      </main>

      <ActionBar secondary="Eksplor     ·     Antrean Saya     ·     Riwayat     ·     Profil">
        <PrimaryButton onClick={() => navigate("/detail")}>
          Pilih De Soematra 1897
        </PrimaryButton>
      </ActionBar>
    </MobileFrame>
  );
}
