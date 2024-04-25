import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config: Config = {
  prefix: "nx-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        50: "#FFE0EF", // "hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)32%/var(--tw-text-opacity))",
        100: "#FFE0EF", // "hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)32%/var(--tw-text-opacity))", // makePrimaryColor(94),
        200: "#FFE0EF", // "hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)32%/var(--tw-text-opacity))", // makePrimaryColor(86),
        300: "#FFE0EF", // "hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)32%/var(--tw-text-opacity))", // makePrimaryColor(77),
        400: "#FFE0EF", // "hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)32%/var(--tw-text-opacity))", // makePrimaryColor(66),
        500: "#FFE0EF", // "hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)32%/var(--tw-text-opacity))", // makePrimaryColor(50),
        600: "#FFE0EF", // "hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)32%/var(--tw-text-opacity))", // makePrimaryColor(45),
        700: "#FFE0EF", // "hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)32%/var(--tw-text-opacity))", // makePrimaryColor(39),
        750: "#FFE0EF", // "hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)32%/var(--tw-text-opacity))", // makePrimaryColor(35),
        800: "#FFE0EF", // "hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)32%/var(--tw-text-opacity))", // makePrimaryColor(32),
        900: "#FFE0EF", // "hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)32%/var(--tw-text-opacity))", // makePrimaryColor(24),
      },
    },
    extend: {
      colors: {
        dark: "#111",
      },
    },
  },
  plugins: [],
  darkMode: ["class", 'html[class~="dark"]'],
}
export default config
