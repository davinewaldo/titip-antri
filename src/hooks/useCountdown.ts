import { useEffect, useRef, useState } from "react";

/**
 * Hitung mundur dari `startSeconds` ke 0.
 * Mengembalikan sisa detik + teks "MM:SS".
 */
export function useCountdown(startSeconds: number) {
  const [seconds, setSeconds] = useState(startSeconds);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setSeconds((s) => (s <= 0 ? 0 : s - 1));
    }, 1000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const reset = () => setSeconds(startSeconds);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return { seconds, label: `${mm}:${ss}`, reset };
}
