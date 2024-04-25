/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    "postcss-lightningcss": {
      browsers: ">= .25%",
    },
  },
};

export default config;
