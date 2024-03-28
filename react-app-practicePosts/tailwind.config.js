/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
        extend: {
            fontFamily:{
                vazir:"Vazirmatn"
            },
            colors:{
                mainColorGreen:"#1b9b00",
                // mainColorBlue:"#58c2eb",
                mainColorBlue:{
                    "50":"rgba(88,194,235,.2)",
                    "100":"#58c2eb",
                    "200":"#009dd2"
                },
                mainColorYellow:"#fbc600"
            }
        },
    },
    plugins: [],
}
