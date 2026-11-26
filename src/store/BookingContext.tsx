import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/** Data satu restoran untuk alur pemesanan. */
export type Restaurant = {
  id: string;
  name: string;
  category: string;
  rating: string;
  address: string;
  priceTier: string;
  estimate: string;
};

/** Seluruh state pemesanan yang mengalir antar halaman. */
type BookingState = {
  // Login & verifikasi
  phone: string;
  otp: string;
  // Pilihan restoran & meja
  restaurant: Restaurant;
  guestCount: string;
  area: string;
  // Data pemesan
  customerName: string;
  customerPhone: string;
  note: string;
  consent: boolean;
  // Tiket antrean
  queueCode: string;
  ticketId: string;
  // Posisi antrean langsung (disimulasikan)
  peopleAhead: number;
};

type BookingContextType = BookingState & {
  set: <K extends keyof BookingState>(key: K, value: BookingState[K]) => void;
  decrementAhead: () => void;
};

const DEFAULT_RESTAURANT: Restaurant = {
  id: "de-soematra",
  name: "De Soematra 1897",
  category: "HERITAGE FINE DINING",
  rating: "4.9",
  address: "Jl. Sumatera No.88, Gubeng, Surabaya",
  priceTier: "$$$$",
  estimate: "15–20 menit",
};

const INITIAL: BookingState = {
  phone: "",
  otp: "",
  restaurant: DEFAULT_RESTAURANT,
  guestCount: "4",
  area: "indoor",
  customerName: "Budi Santoso",
  customerPhone: "+62 812-9883-4120",
  note: "Perayaan ulang tahun kecil & 1 high chair anak.",
  consent: true,
  queueCode: "A-072",
  ticketId: "TA-2026-0072",
  peopleAhead: 3,
};

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BookingState>(INITIAL);

  const value = useMemo<BookingContextType>(
    () => ({
      ...state,
      set: (key, val) => setState((prev) => ({ ...prev, [key]: val })),
      decrementAhead: () =>
        setState((prev) => ({
          ...prev,
          peopleAhead: Math.max(0, prev.peopleAhead - 1),
        })),
    }),
    [state]
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

/** Hook untuk membaca & mengubah data pemesanan dari halaman mana pun. */
export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking harus dipakai di dalam BookingProvider");
  return ctx;
}
