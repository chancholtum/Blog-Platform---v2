/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image":
          "url('https://www.fanabc.com/english/wp-content/uploads/2022/12/321105434_883868013027395_2576485099436938498_n.jpg')",
      },
    },
  },
  plugins: [],
};
