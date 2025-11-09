import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hcom: {
          bg: 'var(--bg)',
          surface: 'var(--surface)', // Corrected reference
          border: 'var(--border)',
          muted: 'var(--muted)',
          text: 'var(--text)',
          subtext: 'var(--subtext)',
          primary: 'var(--primary)',
          primaryHover: 'var(--primaryHover)',
          secondary: 'var(--secondary)',
          highlight: 'var(--highlight)',
        },
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
