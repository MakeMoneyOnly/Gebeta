import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    crimson: '#A81818',
                    mint: '#E0F2E9',
                    blue: '#1848A8',
                    yellow: '#F2C94C',
                },
                surface: {
                    0: '#FFFFFF',
                    1: '#F8F8F8',
                },
                glass: {
                    black: 'rgba(0,0,0,0.85)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            boxShadow: {
                'float': '0 10px 30px rgba(0,0,0,0.15)',
                'float-strong': '0 20px 40px rgba(0,0,0,0.25)',
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
