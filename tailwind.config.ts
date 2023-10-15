import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "17": "60px",
        "30": "120px",
        "88": "22rem",
        "97": "28rem",
        "99": "32rem",
      },
      fontFamily: {
        monoSans: ["Mono Sans", "monospace"],
        monaSansBold: ["Mona Sans", "monospace"],
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
