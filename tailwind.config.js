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
        csrcblue: "#00a4de",
        csrcyellow: "#fff998",
        csrcdark: "#003041",
        csrclight: "#def6ff",
        csrcdanger: "#ff4757",
      },
      backgroundImage: {
        search: "url('/assets/icons/comics-src-search.svg')",
        search_area: "url('/assets/images/comics-src-search-area.svg')",
        bubble_button: "url('/assets/images/comics-src-bubble-button.svg')",
        bubble_main: "url('/assets/images/comics-src-bubble-main.svg')",
        bubble_small: "url('/assets/images/comics-src-bubble-small.svg')",
        bubble_electric: "url('/assets/images/comics-src-bubble-electric.svg')",
        bubble_double: "url('/assets/images/comics-src-bubble-double.svg')",
        bubble_idea: "url('/assets/images/comics-src-bubble-idea.svg')",
        bubble_square: "url('/assets/images/comics-src-bubble-square.svg')",
        bubble_flag: "url('/assets/images/comics-src-bubble-flag.svg')",
        close_modal: "url('/assets/icons/comics-src-cross.svg')",
        mock_offset_01: "url('/assets/images/comics-src-mock-halftone-01.svg')",
        mock_offset_02: "url('/assets/images/comics-src-mock-halftone-02.svg')",
        background_01: "url('/assets/images/comics-src-background-01.svg')",
        background_02: "url('/assets/images/comics-src-background-02.svg')",
        background_03: "url('/assets/images/comics-src-background-03.svg')",
        background_05: "url('/assets/images/comics-src-background-05.svg')",
        background_07: "url('/assets/images/comics-src-background-07.svg')",
        background_09: "url('/assets/images/comics-src-background-09.svg')",
      },
      content: {
        link: "url('/assets/icons/comics-src-link.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
