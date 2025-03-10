/** @type {import('tailwindcss').Config} */
import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syncFont: ["Syne", "serif"],
        quickSandFont: ["Quicksand", "serif"],
        bangla: ["Bangla", "serif"],
      },
    },
  },
  plugins: [],
};

export default keepTheme(config);
