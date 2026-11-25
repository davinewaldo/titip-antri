import { ChevronLeft, UserRound, Utensils } from "lucide-react";
import logo from "/assets/titipantri-logo.png";

type TopNavProps =
  | { variant: "brand"; onAccount?: () => void }
  | {
      variant: "back";
      title: string;
      onBack?: () => void;
      onAccount?: () => void;
    };

/**
 * Navigation bar 64px. Dua bentuk:
 *  - "brand": logo + wordmark TitipAntri (halaman welcome / eksplor)
 *  - "back" : chevron kiri + judul halaman (halaman dalam alur)
 * Tombol akun bulat di kanan.
 */
export default function TopNav(props: TopNavProps) {
  return (
    <header className="flex h-16 w-full shrink-0 items-center gap-2.5 border-b border-line px-4">
      {props.variant === "brand" ? (
        <div className="flex min-w-0 flex-1 items-center gap-[7px]">
          <img
            src={logo}
            alt="TitipAntri"
            className="size-[30px] shrink-0 rounded-md"
          />
          <p className="font-display text-xl font-bold leading-none">
            Titip<span className="text-amber">Antri</span>
          </p>
        </div>
      ) : (
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          <button
            type="button"
            onClick={props.onBack}
            aria-label="Kembali"
            className="grid size-5 shrink-0 place-items-center text-white"
          >
            <ChevronLeft className="size-5" />
          </button>
          <p className="truncate text-base font-semibold text-white">
            {props.title}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={props.onAccount}
        aria-label="Akun"
        className="grid size-[30px] shrink-0 place-items-center rounded-pill"
        style={{
          background: props.variant === "brand" ? "#ffc174" : "transparent",
          border: props.variant === "back" ? "1px solid #27272a" : "none",
        }}
      >
        {props.variant === "brand" ? (
          <Utensils className="size-4 text-amber-ink" />
        ) : (
          <UserRound className="size-4 text-white" />
        )}
      </button>
    </header>
  );
}
