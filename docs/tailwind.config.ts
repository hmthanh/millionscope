import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const makePrimaryColor = (l: number, opacityValue: number): string => {
  // const rs = ({ opacityValue }: number): string => {
  //   const cl:string = (
  //     `hsl(var(--nextra-primary-hue) var(--nextra-primary-saturation) ${l}%` +
  //     (opacityValue ? ` / ${opacityValue})` : ")")
  //   )
  //   return cl
  // }
  let opacity = opacityValue ? ` / ${opacityValue}` : "";
  return `hsl(var(--nextra-primary-hue) var(--nextra-primary-saturation) ${l}% ${opacity})`;
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./client/**/*.{js,ts,jsx,tsx,mdx}",
    "./server/**/*.{js,ts,jsx,tsx,mdx}",
    "./global/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "nx-",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    letterSpacing: {
      tight: "-0.015em",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: colors.gray,
      slate: colors.slate,
      neutral: colors.neutral,
      red: colors.red,
      orange: colors.orange,
      blue: colors.blue,
      yellow: colors.yellow,
      primary: {
        50: makePrimaryColor(97, 50),
        100: makePrimaryColor(94, 100),
        200: makePrimaryColor(86, 200),
        300: makePrimaryColor(77, 300),
        400: makePrimaryColor(66, 400),
        500: makePrimaryColor(50, 500),
        600: makePrimaryColor(45, 600),
        700: makePrimaryColor(39, 700),
        750: makePrimaryColor(35, 750),
        800: makePrimaryColor(32, 800),
        900: makePrimaryColor(24, 900),
      },
    },
    fontFamily: {
      organetto: ["var(--font-organetto)"],
    },
    extend: {
      colors: {
        dark: "#111",
      },
    },
  },
  plugins: [],
  darkMode: ["class", 'html[class~="dark"]'],
};
export default config;
