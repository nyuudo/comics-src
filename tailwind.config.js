/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        csrcyelow: "#fff998",
        csrcblue: "#00a4de",
        csrclight: "#def6ff",
        csrcdark: "#003041",
      },
      backgroundImage: {
        search: "url('/assets/icons/comics-src-search.svg')",
        search_area: "url('/assets/images/comics-src-search-area.svg')",
      },
    },
  },
  plugins: [],
};
