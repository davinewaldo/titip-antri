/**
 * Blok nomor antrean: label kecil mono + kode besar amber.
 * Sesuai Figma: label 15px area, kode ~56px mono bold amber, tengah.
 */
export default function QueueNumber({
  label,
  code,
}: {
  label: string;
  code: string;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-[4px] py-1">
      <p className="w-full text-center font-mono text-[11px] font-bold uppercase tracking-wide text-muted">
        {label}
      </p>
      <p className="w-full text-center font-mono text-[56px] font-bold leading-none text-amber">
        {code}
      </p>
    </div>
  );
}
