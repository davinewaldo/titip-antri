/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Diambil langsung dari desain Figma TITIP.ANTRI
        ink: "#09090b", // latar utama (hitam)
        surface: "#18181b", // kartu / benefit
        line: "#27272a", // border
        amber: {
          DEFAULT: "#f59e0b", // aksen utama
          soft: "#ffc174", // teks aksen terang
          ink: "#472a00", // teks di atas tombol amber
          badge: "#30220d", // latar badge status
        },
        muted: "#a1a1aa", // teks abu
      },
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "12px",
        pill: "999px",
      },
      maxWidth: {
        frame: "390px",
      },
    },
  },
  plugins: [],
};
