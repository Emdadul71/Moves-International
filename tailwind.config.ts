import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    container: false,
  },
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      jost: ["var(--font-ibm)"],
    },

    extend: {
      screens: {
        xsm: "490px",
        smd: "620px",
      },
      colors: {
        primary: "var(--Mov-clr-primary)",
        secondary: "var(--Mov-clr-secondary)",
        tertiary: "var(--Mov-clr-tertiary)",
        grey: "var(--Mov-clr-gray)",
        white: "var(--Mov-clr-white)",
        black: "var(--Mov-clr-black)",
        hover: "var(--Mov-clr-hover)",
        border: "var(--Mov-clr-border)",

        heading: "var(--Mov-clr-text-heading)",
        body: "var(--Mov-clr-text-body)",
      },

      boxShadow: {
        one: "0px 3px 10px 0px var(--Mov-clr-shadow)",
        two: "5px 5px 20px 0px var(--Mov-clr-shadow-two)",
      },

      fontSize: {
        h1: "var(--Mov-font-size-h1)",
        "h1-md": "var(--Mov-font-size-h1-md)",
        "h1-sm": "var(--Mov-font-size-h1-sm)",
        h2: "var(--Mov-font-size-h2)",
        "h2-md": "var(--Mov-font-size-h2-md)",
        "h2-sm": "var(--Mov-font-size-h2-sm)",
        h3: "var(--Mov-font-size-h3)",
        "h3-md": "var(--Mov-font-size-h3-md)",
        "h3-sm": "var(--Mov-font-size-h3-sm)",
        h4: "var(--Mov-font-size-h4)",
        "h4-md": "var(--Mov-font-size-h4-md)",
        "h4-sm": "var(--Mov-font-size-h4-sm)",
        h5: "var(--Mov-font-size-h5)",
        "h5-md": "var(--Mov-font-size-h5-md)",
        "h5-sm": "var(--Mov-font-size-h5-sm)",
        h6: "var(--Mov-font-size-h6)",
        "h6-md": "var(--Mov-font-size-h6-md)",
        "h6-sm": "var(--Mov-font-size-h6-sm)",

        p1: "var(--Mov-font-size-p1)",
        p2: "var(--Mov-font-size-p2)",
        p3: "var(--Mov-font-size-p3)",
        p4: "var(--Mov-font-size-p4)",
        p5: "var(--Mov-font-size-p5)",

        c1: "var(--Mov-font-size-c1)",
        c2: "var(--Mov-font-size-c2)",
        c3: "var(--Mov-font-size-c3)",
        c4: "var(--Mov-font-size-c4)",
        c5: "var(--Mov-font-size-c5)",
      },
    },
  },

  plugins: [],
};
export default config;
