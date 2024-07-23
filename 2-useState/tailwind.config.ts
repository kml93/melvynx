import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: ["class"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dracula"],
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
} satisfies Config;
