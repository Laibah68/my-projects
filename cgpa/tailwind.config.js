/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#dceeff",
          200: "#b9ddff",
          300: "#8bc7ff",
          400: "#5aaeff",
          500: "#2a92ff",
          600: "#1a74db",
          700: "#155db0",
          800: "#114a8d",
          900: "#0e3d74"
        }
      },
      boxShadow: {
        soft: "0 8px 28px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: [require("tailwind-scrollbar-hide")]
};
