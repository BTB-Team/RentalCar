// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F7D102", // رنگ زرد اصلی دکمه‌ها و اکشن‌ها
          black: "#000000",  // رنگ سیاه اصلی پس‌زمینه‌ها و متون
        }
      },
      fontFamily: {
        sans: ["Yekan", "sans-serif"], 
      },
      fontWeight: {
        // تعریف وزن‌های دقیق استفاده شده در فیگما
        regular: "400",     // برای متون بدنه و توضیحات (Body)
        extrabold: "800",   // برای دکمه‌ها و تایتل‌های متوسط (Title)
        blackfont: "900",   // برای تیترهای بزرگ هیرو (Display)
      }
    },
  },
  plugins: [],
}
