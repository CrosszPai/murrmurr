module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          0: "#FFFFFF",
          10: "#F3F3F3",
          40: "#A4A4A4",
          50: "#8D8D8D",
          80: "#3D3D3D",
          90: "#282828",
          100: "#000000",
        },
        mint: {
          100: "#03DAC6",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
