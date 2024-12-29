import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-blue": "#130160",
        "bright-orange": "#FF9228",
        "lavender-gray": "#AAA6B9",
        "deep-purple": "#524B6B",
        "lavender-blush": "#ECE7FC",
        "slate-purple": "#6F6B80",
      },
    },
  },
  plugins: [],
} satisfies Config;
