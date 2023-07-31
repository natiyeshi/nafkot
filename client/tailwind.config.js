/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('tailwind-scrollbar'),
    // other plugins...
  ],
  theme: {
    extend: {
      colors:{
        'redd':'#E13C51',
        'dark':"#222222",
        'sdark': "#222338",
        'mdark': "#1B1C31"
      },
      width:{
        "c72" : "72%",
        "c14" : "14%",
        "c28" : "28%",
      },
      padding:{
        "c14" : "14%"
      },
      fontSize:{
        "normal" : "13px",
        "small" : "10px",
        "large" : "14px",
        "big" : "20px"
        // "normal" : "13px",
      }
    },
  },
  plugins: [],
}