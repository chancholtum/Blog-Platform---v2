/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        bkg: {
          1: "hsl(var(--color-bkg1) / <alpha-value>)",
          2: "hsl(var(--color-bkg2) / <alpha-value>)",
        },
        text: {
          1: "hsl(var(--color-textBlack) / <alpha-value>)",
          2: "hsl(var(--color-textWhite) / <alpha-value>)",
          3: "hsl(var(--color-textGrey) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "my-image":
          "url('https://i0.wp.com/thesportsgrail.com/wp-content/uploads/2023/07/Chances.png?fit=1568%2C882&ssl=1')",
      },
      animation: {
        beat: "beat 1s ease-out infinite",
        fade: "fade 1s ease-out ",
        fadeIn: "fadeIn 1s linear",
        fadeInScroll: "fadeInScroll linear both",
      },
      keyframes: {
        beat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.2)" },
        },
        fade: {
          "0%": { transform: "translateY(-20px) scale(0.95)" },
          "100%": { transform: "translateY(0px) scale(1)" },
        },
        fadeInScroll: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
