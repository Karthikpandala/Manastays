/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4FA3C7",
        "primary-dark": "#3B8CAF",
        accent: "#A8D9EB",
        dark: "#333333",
        light: "#EAEAEA"
      },
      container: { center: true, padding: "1rem" },
      fontFamily: {
        poppins: ["Poppins","ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Ubuntu","Cantarell","Noto Sans","Helvetica Neue","Arial","sans-serif"]
      },
      keyframes: {
        pulseScale: { "0%":{transform:"scale(1)"}, "50%":{transform:"scale(1.05)"}, "100%":{transform:"scale(1)"} }
      },
      animation: {
        pulseScale: "pulseScale 1.5s infinite"
      }
    }
  },
  plugins: []
};
