import { useState } from "react";
import { DoorOpen, Snowflake, Trees } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import TopNav from "../components/TopNav";
import StageLabel from "../components/StageLabel";
import ActionBar from "../components/ActionBar";
import PrimaryButton from "../components/PrimaryButton";
import detailPhoto from "/assets/resto-detail.png";

const guestOptions = ["1", "2", "4", "6", "8+"];

const areas = [
  {
    key: "indoor",
    icon: Snowflake,
    title: "Indoor AC Main Hall",
    desc: "Sejuk · Live piano akustik",
  },
  {
    key: "veranda",
    icon: Trees,
    title: "Colonial Veranda",
    desc: "Semi-outdoor · Taman rindang",
  },
  {
    key: "vip",
    icon: DoorOpen,
    title: "Private VIP Salon",
    desc: "Privat · Minimum 4 tamu",
  },
];

/** Halaman 05 — Detail Restoran & Pilih Meja. */
export default function DetailPage() {
  const navigate = useNavigate();
  const [guest, setGuest] = useState("4");
  const [area, setArea] = useState("indoor");

  return (
    <MobileFrame>
      <TopNav variant="back" title="Detail Restoran" onBack={() => navigate("/eksplor")} />
      <StageLabel>05 / 11 · PILIH MEJA</StageLabel>

      <main className="flex min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto px-5 pb-3 pt-2.5">
        <div className="h-[138px] w-full overflow-hidden rounded-card">
          <img src={detailPhoto} alt="De Soematra 1897" className="size-full object-cover" />
        </div>

        {/* Restaurant identity */}
        <div className="flex w-full flex-col gap-[5px]">
          <div className="flex w-full items-center gap-3 text-xs leading-[1.5]">
            <span className="flex-1 text-muted">HERITAGE FINE DINING</span>
            <span className="font-semibold text-amber-soft">★ 4.9</span>
          </div>
          <p className="w-full font-display text-2xl font-bold leading-[1.2] text-white">
            De Soematra 1897
          </p>
          <p className="w-full text-[11px] leading-[1.5] text-muted">
            Jl. Sumatera No.88, Gubeng, Surabaya
          </p>
          <p className="w-full text-[11px] leading-[1.5] text-[#4edea3]">
            Buka s/d 23:00 · Estimasi antrean 15–20 menit
          </p>
        </div>

        {/* Guest selection */}
        <div className="flex w-full flex-col gap-2">
          <p className="w-full font-display text-[17px] font-bold leading-[1.2] text-white">
            Jumlah Tamu (Pax)
          </p>
          <div className="flex w-full items-start gap-2">
            {guestOptions.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGuest(g)}
                className={`flex h-11 flex-1 items-center justify-center rounded-[10px] font-mono text-[15px] font-bold ${
                  guest === g ? "bg-amber-soft text-amber-ink" : "bg-[#1f1f22] text-white"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Seating preferences */}
        <div className="flex w-full flex-col gap-2">
          <p className="w-full font-display text-[17px] font-bold leading-[1.2] text-white">
            Preferensi Ruangan
          </p>
          {areas.map(({ key, icon: Icon, title, desc }) => {
            const selected = area === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setArea(key)}
                className={`flex w-full items-center gap-2.5 rounded-card border p-[11px] text-left ${
                  selected ? "border-amber bg-amber-badge" : "border-line bg-surface"
                }`}
              >
                <Icon className="size-5 shrink-0 text-amber" />
                <div className="flex flex-1 flex-col gap-0.5 leading-[1.5]">
                  <span className="text-xs font-semibold text-white">{title}</span>
                  <span className="text-[10px] text-muted">{desc}</span>
                </div>
                <span
                  className={`grid size-[15px] shrink-0 place-items-center rounded-pill border ${
                    selected ? "border-amber" : "border-line"
                  }`}
                >
                  {selected ? <span className="size-[7px] rounded-pill bg-amber" /> : null}
                </span>
              </button>
            );
          })}
        </div>
      </main>

      <ActionBar secondary={`${guest} tamu · ${areas.find((a) => a.key === area)?.title}`}>
        <PrimaryButton onClick={() => navigate("/pemesan")}>
          Lanjut ke Data Pemesan
        </PrimaryButton>
      </ActionBar>
    </MobileFrame>
  );
}
