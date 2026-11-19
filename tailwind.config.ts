import type { Config } from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#080808", ink2: "#111111", card: "#171717", paper: "#F5F0E8", mute: "#A6A19A", gold: "#C5A46D", bronze: "#806747" },
    fontFamily: { display: ['"Instrument Serif"', "Georgia", "serif"], sans: ["Manrope", "system-ui", "sans-serif"] },
    transitionTimingFunction: { luxe: "cubic-bezier(0.76, 0, 0.24, 1)" }
  } },
  plugins: []
} satisfies Config;
