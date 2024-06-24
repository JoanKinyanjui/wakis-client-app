import type { Config } from "tailwindcss";
const { colors } = require('./src/themes')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: { ...colors },
    fontSize: {
      xs: '10px',
      sm: '12px',
      md: '14px',
      mmd:'16px',
      lg: '18px',
      xl: '20px',
      xxl:'24px'
    },
    extend: {
      backgroundImage: {
        'gradient-cta': 'linear-gradient(90deg, #9D12F2 0%, #5A088C 100%)',
      },
      screens: {
        xxs: '320px',
        xs: '400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
