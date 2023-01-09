/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#FF5F00",
                secondary: "#009788",
                "discord-800": "#202225",
                "discord-700": "#292b2f",
                "discord-600": "#2f3136",
                "discord-500": "#37383e",
                "discord-400": "#41444b",
                "theme-primary": "#bd93f9",
                "theme-secondary": "#282a36",
                "zinc-850": "#1e1e21",
            },
            keyframes: {
                wheel: {
                    to: {
                        opacity: 0,
                        top: "2.5rem",
                    },
                },
            },
            animation: {
                wheel: "wheel 1.75s ease-out infinite",
            },
        },
    },
    plugins: [],
};
