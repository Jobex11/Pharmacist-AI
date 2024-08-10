/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg-cyan":
          "linear-gradient(235.43deg, #FEFFFF 12.74%, #A9DBFF 96.42%)",
        "custom-bg-1": "linear-gradient(180deg, #0C4E86 0%, #031320 100%)",
        "custom-bg-2": "linear-gradient(180deg, #012657 0%, #0C4E86 100%)",
        "custom-bg-3": "linear-gradient(180deg, #B6D8FF 0%, #E0EFFF 100%)",
      },
      boxShadow: {
        "combined-custom":
          "0px 24px 32px -8px #00000012, 0px 4px 32px 0px #00000008",
      },
      colors: {
        primary: "#0C4E86",
        secondary: "",
        tertiary: "",
      },
    },
  },
  plugins: [],
};
