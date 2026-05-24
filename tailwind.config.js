/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg0: "var(--bg-0)",
        bg1: "var(--bg-1)",
        bg2: "var(--bg-2)",
        border: "var(--border)",
        borderHi: "var(--border-hi)",
        fg0: "var(--fg-0)",
        fg1: "var(--fg-1)",
        fg2: "var(--fg-2)",
        accent: "var(--accent)",
        accentDim: "var(--accent-dim)",
        warn: "var(--warn)",
        danger: "var(--danger)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        mono: "var(--font-mono)",
      },
      transitionTimingFunction: {
        expoish: "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
      maxWidth: {
        content: "var(--content-max)",
      },
    },
  },
  plugins: [],
};
