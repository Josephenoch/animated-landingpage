import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      extend: {
        rotate: {
          '-2': '-2deg',
          '180': '180deg',
        },
        transform: {
          'custom-rotate': 'rotateZ(-2deg) rotateY(180deg)',
        }
      }
    },
    variants: {
      extend: {
        transform: ['group-hover'],
      },
    },
  },
  plugins: [],
};
export default config;
