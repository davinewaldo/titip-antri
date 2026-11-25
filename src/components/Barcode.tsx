/**
 * Barcode dekoratif: deretan bar putih dengan lebar acak-tetap,
 * meniru barcode di tiket Figma. Plus kode identifier di bawah.
 */
const BAR_WIDTHS = [2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 1, 2, 4,
  1, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 1, 2, 4, 1, 2, 4, 1];

export default function Barcode({ code }: { code: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-2 py-2">
      <div className="flex h-[42px] items-end gap-[2px]">
        {BAR_WIDTHS.map((w, i) => (
          <span
            key={i}
            className="h-full rounded-[1px] bg-white"
            style={{ width: `${w}px` }}
          />
        ))}
      </div>
      <p className="font-mono text-[11px] tracking-[0.2em] text-muted">{code}</p>
    </div>
  );
}
