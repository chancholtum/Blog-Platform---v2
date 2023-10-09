/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image":
          "url('https://i0.wp.com/thesportsgrail.com/wp-content/uploads/2023/07/Chances.png?fit=1568%2C882&ssl=1')",
      },
    },
  },
  plugins: [],
};
