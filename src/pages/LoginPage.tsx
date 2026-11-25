import { useState } from "react";
import { Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import TopNav from "../components/TopNav";
import StageLabel from "../components/StageLabel";
import IntroSymbol from "../components/IntroSymbol";
import Card from "../components/Card";
import InfoBox from "../components/InfoBox";
import ActionBar from "../components/ActionBar";
import PrimaryButton from "../components/PrimaryButton";

/** Halaman 02 — Login WhatsApp. */
export default function LoginPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("81298834120");
  const [remember, setRemember] = useState(true);

  return (
    <MobileFrame>
      <TopNav variant="back" title="Masuk ke TitipAntri" onBack={() => navigate("/")} />
      <StageLabel>02 / 11 · LOGIN</StageLabel>

      <main className="flex min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto px-5 pb-3 pt-2.5">
        {/* Login introduction */}
        <div className="flex w-full flex-col gap-4 pb-3 pt-[30px]">
          <IntroSymbol>
            <Smartphone className="size-[30px]" />
          </IntroSymbol>
          <h1 className="font-display text-[28px] font-bold leading-[1.2] text-white">
            Satu nomor untuk setiap giliran.
          </h1>
          <p className="text-sm leading-[1.5] text-muted">
            Masuk dengan nomor WhatsApp aktif. Kode OTP dan panggilan meja
            dikirim ke nomor ini.
          </p>
        </div>

        {/* Form card */}
        <Card className="flex flex-col gap-3">
          <label className="flex w-full flex-col gap-[7px]">
            <span className="text-xs font-semibold leading-[1.5] text-muted">
              Nomor WhatsApp / Handphone
            </span>
            <div className="flex items-center gap-2 rounded-lg border border-line bg-[#1f1f22] p-[13px]">
              <span className="text-sm text-muted">+62</span>
              <input
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 bg-transparent text-sm text-white outline-none"
              />
            </div>
          </label>
          <p className="text-[11px] leading-[1.5] text-muted">
            Gunakan nomor tanpa angka 0 di depan.
          </p>
          <div className="flex w-full items-center gap-2.5">
            <button
              type="button"
              onClick={() => setRemember((v) => !v)}
              aria-pressed={remember}
              aria-label="Ingat sesi"
              className={`flex h-[22px] w-[38px] shrink-0 items-center rounded-pill p-[3px] transition-colors ${
                remember ? "justify-end bg-amber" : "justify-start bg-line"
              }`}
            >
              <span className="size-4 rounded-pill bg-ink" />
            </button>
            <span className="flex-1 text-xs leading-[1.5] text-muted">
              Ingat sesi di perangkat ini
            </span>
          </div>
        </Card>

        <InfoBox title="Aman & tanpa kata sandi">
          Nomor Anda hanya digunakan untuk verifikasi dan informasi antrean.
        </InfoBox>
      </main>

      <ActionBar secondary="Dengan masuk, Anda menyetujui Syarat & Kebijakan Layanan.">
        <PrimaryButton onClick={() => navigate("/otp")}>
          Kirim Kode OTP
        </PrimaryButton>
      </ActionBar>
    </MobileFrame>
  );
}
