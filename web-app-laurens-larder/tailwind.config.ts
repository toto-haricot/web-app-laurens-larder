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
        LL_pink: '#FE4546',
        LL_pink2: '#F3CFC6',
        LL_orange: '#FF9E21',
        LL_grey: '#DEDFD1',
      },
    },
  },
  plugins: [],
} satisfies Config;
