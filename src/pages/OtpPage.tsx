import { useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import TopNav from "../components/TopNav";
import StageLabel from "../components/StageLabel";
import IntroSymbol from "../components/IntroSymbol";
import Card from "../components/Card";
import InfoBox from "../components/InfoBox";
import ActionBar from "../components/ActionBar";
import PrimaryButton from "../components/PrimaryButton";

/** Halaman 03 — Verifikasi OTP (4 digit). */
export default function OtpPage() {
  const navigate = useNavigate();
  // Nilai awal sesuai desain Figma: 7 4 9 2
  const [digits, setDigits] = useState(["7", "4", "9", "2"]);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const setDigit = (i: number, v: string) => {
    const clean = v.replace(/\D/g, "").slice(-1);
    setDigits((prev) => {
      const next = [...prev];
      next[i] = clean;
      return next;
    });
    if (clean && i < 3) refs.current[i + 1]?.focus();
  };

  return (
    <MobileFrame>
      <TopNav variant="back" title="Verifikasi WhatsApp" onBack={() => navigate("/login")} />
      <StageLabel>03 / 11 · VERIFIKASI</StageLabel>

      <main className="flex min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto px-5 pb-3 pt-2.5">
        <div className="flex w-full flex-col gap-4 pb-4 pt-[30px]">
          <IntroSymbol>
            <MessageCircle className="size-[30px]" />
          </IntroSymbol>
          <h1 className="font-display text-[28px] font-bold leading-[1.2] text-white">
            Masukkan kode verifikasi.
          </h1>
          <p className="text-sm leading-[1.5] text-muted">
            Kode 4 digit dikirim melalui WhatsApp ke +62 812-••••-4120.
          </p>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-left text-xs font-semibold leading-[1.5] text-amber-soft"
          >
            Ubah nomor WhatsApp
          </button>
        </div>

        <Card className="flex flex-col gap-3">
          <div className="flex w-full items-start gap-3">
            {digits.map((d, i) => (
              <input
                key={i}
                ref={(el) => (refs.current[i] = el)}
                value={d}
                inputMode="numeric"
                maxLength={1}
                onChange={(e) => setDigit(i, e.target.value)}
                className={`h-16 w-0 min-w-0 flex-1 rounded-lg border bg-[#1f1f22] text-center font-mono text-[26px] font-bold text-amber outline-none ${
                  i === 3 ? "border-amber" : "border-line"
                } focus:border-amber`}
              />
            ))}
          </div>
          <div className="flex w-full items-center gap-3 text-xs leading-[1.5]">
            <span className="flex-1 text-muted">Kirim ulang kode dalam</span>
            <span className="font-semibold text-white">00:47</span>
          </div>
        </Card>

        <InfoBox title="Jangan bagikan kode OTP">
          Tim TitipAntri tidak pernah meminta kode verifikasi Anda.
        </InfoBox>
      </main>

      <ActionBar secondary="Butuh bantuan? Hubungi TitipAntri">
        <PrimaryButton onClick={() => navigate("/eksplor")}>
          Konfirmasi & Masuk
        </PrimaryButton>
      </ActionBar>
    </MobileFrame>
  );
}
