import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        fadeInQuick: "fadeIn 1s ease-in-out",
        fadeInMedium: "fadeIn 1.5s ease-in-out",
        fadeInSlow: "fadeIn 2s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
