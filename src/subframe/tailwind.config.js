module.exports = {
  // ...

  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(255, 255, 255)",
          100: "rgb(250, 250, 250)",
          200: "rgb(245, 245, 245)",
          300: "rgb(229, 229, 229)",
          400: "rgb(212, 212, 212)",
          500: "rgb(163, 163, 163)",
          600: "rgb(115, 115, 115)",
          700: "rgb(82, 82, 82)",
          800: "rgb(64, 64, 64)",
          900: "rgb(38, 38, 38)",
        },
        neutral: {
          0: "rgb(252, 252, 252)",
          50: "rgb(250, 250, 250)",
          100: "rgb(240, 240, 240)",
          200: "rgb(235, 235, 235)",
          300: "rgb(230, 230, 230)",
          400: "rgb(163, 163, 163)",
          500: "rgb(115, 115, 115)",
          600: "rgb(82, 82, 82)",
          700: "rgb(64, 64, 64)",
          800: "rgb(38, 38, 38)",
          900: "rgb(23, 23, 23)",
          950: "rgb(10, 10, 10)",
        },
        error: {
          50: "rgb(254, 242, 242)",
          100: "rgb(254, 226, 226)",
          200: "rgb(254, 202, 202)",
          300: "rgb(252, 165, 165)",
          400: "rgb(248, 113, 113)",
          500: "rgb(239, 68, 68)",
          600: "rgb(220, 38, 38)",
          700: "rgb(185, 28, 28)",
          800: "rgb(153, 27, 27)",
          900: "rgb(127, 29, 29)",
        },
        warning: {
          50: "rgb(254, 252, 232)",
          100: "rgb(254, 249, 195)",
          200: "rgb(254, 240, 138)",
          300: "rgb(253, 224, 71)",
          400: "rgb(250, 204, 21)",
          500: "rgb(234, 179, 8)",
          600: "rgb(202, 138, 4)",
          700: "rgb(161, 98, 7)",
          800: "rgb(133, 77, 14)",
          900: "rgb(113, 63, 18)",
        },
        success: {
          50: "rgb(240, 253, 244)",
          100: "rgb(220, 252, 231)",
          200: "rgb(187, 247, 208)",
          300: "rgb(134, 239, 172)",
          400: "rgb(74, 222, 128)",
          500: "rgb(34, 197, 94)",
          600: "rgb(22, 163, 74)",
          700: "rgb(21, 128, 61)",
          800: "rgb(22, 101, 52)",
          900: "rgb(20, 83, 45)",
        },
        "brand-primary": "rgb(23, 23, 23)",
        "default-font": "rgb(38, 38, 38)",
        "subtext-color": "rgb(115, 115, 115)",
        "neutral-border": "rgb(230, 230, 230)",
        white: "rgb(255, 255, 255)",
        "default-background": "rgb(252, 252, 252)",
        "bg-base": "rgb(252, 252, 252)",
        "bg-primary": "rgb(255, 255, 255)",
        "bg-secondary": "rgb(250, 250, 250)",
        "bg-tertiary": "rgb(240, 240, 240)",
        "border-secondary": "rgb(240, 240, 240)",
        "bg-editor": "rgb(250, 250, 250)",
      },
      fontSize: {
        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
        "caption-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
          },
        ],
        body: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "body-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "heading-3": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
        "heading-2": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        "heading-1": [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
        "monospace-body": [
          "13px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
      },
      fontFamily: {
        caption: "Inter",
        "caption-bold": "Inter",
        body: "Inter",
        "body-bold": "Inter",
        "heading-3": "Inter",
        "heading-2": "Inter",
        "heading-1": "Inter",
        "monospace-body": "monospace",
      },
      boxShadow: {
        default:
          "0px 1px 4px -1px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
        overlay:
          "0px 4px 16px -2px rgba(0, 0, 0, 0.12), 0px 2px 8px -2px rgba(0, 0, 0, 0.12)",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "calc((100vw + 16px - 640px) / 2)",
          md: "calc((100vw + 16px - 768px) / 2)",
          lg: "calc((100vw + 16px - 1024px) / 2)",
          xl: "calc((100vw + 16px - 1280px) / 2)",
          "2xl": "calc((100vw + 16px - 1536px) / 2)",
        },
      },
      spacing: {
        112: "28rem",
        144: "36rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
      },
      screens: {
        mobile: {
          max: "767px",
        },
      },
    },
  },
};
