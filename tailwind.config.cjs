/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#FF5F00",
                secondary: "#009788",
            },
        },
    },
    plugins: [],
};
