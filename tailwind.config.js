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
        bubble_button_left:
          "url('/assets/images/comics-src-bubble-button-left.svg')",
        bubble_button_right:
          "url('/assets/images/comics-src-bubble-button-right.svg')",
        bubble_main: "url('/assets/images/comics-src-bubble-main.svg')",
        bubble_small: "url('/assets/images/comics-src-bubble-small.svg')",
        bubble_electric: "url('/assets/images/comics-src-bubble-electric.svg')",
        bubble_double: "url('/assets/images/comics-src-bubble-double.svg')",
        bubble_idea: "url('/assets/images/comics-src-bubble-idea.svg')",
        bubble_square: "url('/assets/images/comics-src-bubble-square.svg')",
        bubble_flag: "url('/assets/images/comics-src-bubble-flag.svg')",
        close_modal: "url('/assets/icons/comics-src-cross.svg')",
        mock_offset: "url('/assets/images/comics-src-mock-halftone.svg')",
        background_01: "url('/assets/images/comics-src-background-01.svg')",
        background_02: "url('/assets/images/comics-src-background-02.svg')",
        background_03: "url('/assets/images/comics-src-background-03.svg')",
        background_05: "url('/assets/images/comics-src-background-05.svg')",
        background_07: "url('/assets/images/comics-src-background-07.svg')",
        background_09: "url('/assets/images/comics-src-background-09.svg')",
      },
      content: {
        my_account: "url('/assets/icons/comics-src-dashboard-00.svg')",
        my_works: "url('/assets/icons/comics-src-dashboard-01.svg')",
        my_collection: "url('/assets/icons/comics-src-dashboard-02.svg')",
        publications: "url('/assets/icons/comics-src-dashboard-03.svg')",
        my_community: "url('/assets/icons/comics-src-dashboard-04.svg')",
        delete: "url('/assets/icons/comics-src-dashboard-05.svg')",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-profile": {
          "clip-path":
            "polygon(calc(100% - 0px) calc(100% - 0.9px), 36.2px 41.8px, 35.0636px 42.5494px, 33.8768px 43.2352px, 32.6432px 43.8538px, 31.3664px 44.4016px, 30.05px 44.875px, 28.6976px 45.2704px, 27.3128px 45.5842px, 25.8992px 45.8128px, 24.4604px 45.9526px, 23px 46px, 23px 46px, 19.2699px 45.6989px, 15.7312px 44.8272px, 12.4313px 43.4323px, 9.4176px 41.5616px, 6.7375px 39.2625px, 4.4384px 36.5824px, 2.5677px 33.5687px, 1.1728px 30.2688px, 0.3011px 26.7301px, 0px 23px, 3.8087190580202E-31px 23px, 0.3011px 19.2699px, 1.1728px 15.7312px, 2.5677px 12.4313px, 4.4384px 9.4176px, 6.7375px 6.7375px, 9.4176px 4.4384px, 12.4313px 2.5677px, 15.7312px 1.1728px, 19.2699px 0.3011px, 23px -3.5527136788005E-15px, 23px -3.5527136788005E-15px, 26.7301px 0.3011px, 30.2688px 1.1728px, 33.5687px 2.5677px, 36.5824px 4.4384px, 39.2625px 6.7375px, 41.5616px 9.4176px, 43.4323px 12.4313px, 44.8272px 15.7312px, 45.6989px 19.2699px, 46px 23px, 46px 23px, 45.9644px 24.2808px, 45.8592px 25.5424px, 45.6868px 26.7836px, 45.4496px 28.0032px, 45.15px 29.2px, 44.7904px 30.3728px, 44.3732px 31.5204px, 43.9008px 32.6416px, 43.3756px 33.7352px, 42.8px 34.8px,42.8px 34.8px)",
        },
        ".clip-followers": {
          "clip-path": "circle(40%)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
