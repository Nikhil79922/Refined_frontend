/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], 
      },
      colors: {
        blue: {
          580: '#2C6BBF',
          470: "#2A6AB2",
          570: "#32A9DC",
          590: "#288CB2",
          1: "#2A6AB2",  
          2:"#179FDB"  

        },
        gray: {
          450: '#909090',
          350: '#c4c4c4',
          380: '#a6a6a6',
          1: "#141515",
          2: "#7A8699",
          3: "#C7CED9",
          4:"#F2F2F7",
          5: "#98A2B2"
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}