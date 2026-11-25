import { Info } from "lucide-react";

/**
 * Kotak informasi amber gelap (#30220d) dengan ikon info,
 * judul amber-soft + deskripsi abu. Dipakai di halaman login, OTP, dll.
 */
export default function InfoBox({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <div className="flex w-full items-start gap-2.5 rounded-card bg-amber-badge p-3.5">
      <Info className="size-[18px] shrink-0 text-amber-soft" />
      <div className="flex flex-1 flex-col gap-1 text-xs leading-[1.5]">
        <p className="font-semibold text-amber-soft">{title}</p>
        <p className="font-normal text-muted">{children}</p>
      </div>
    </div>
  );
}
