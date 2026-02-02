export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0f0f1a",
          800: "#161627",
          700: "#1f2133",
        },
        luxe: {
          900: "#0b0a0f",
          800: "#14121c",
          700: "#1c1a27",
          600: "#2a2538",
        },
        champagne: {
          400: "#e8e0d5",
          300: "#f0ebe3",
          200: "#f7f3ed",
        },
        gold: {
          500: "#c9a962",
          400: "#d4b978",
          300: "#e5d4a1",
        },
        ultraBlue: {
          500: "#38bdf8",
          400: "#7dd3fc",
          300: "#bae6fd",
        },
        ultraPink: {
          500: "#ec4899",
          400: "#f472b6",
          300: "#f9a8d4",
        },
        neon: {
          500: "#7c3aed",
          400: "#8b5cf6",
          300: "#a78bfa",
        },
        glow: {
          500: "#22d3ee",
          300: "#67e8f9",
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'sans-serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
      },
      boxShadow: {
        soft: "0 12px 32px rgba(15, 15, 26, 0.25)",
        glow: "0 0 0 1px rgba(139, 92, 246, 0.4), 0 12px 30px rgba(34, 211, 238, 0.2)",
        luxe: "0 30px 60px rgba(10, 10, 16, 0.45)",
        "luxe-card": "0 24px 48px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.06)",
        "luxe-hover": "0 32px 64px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(201, 169, 98, 0.15)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56, 189, 248, 0.18), transparent 50%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(201, 169, 98, 0.08), transparent 45%), rgba(11, 10, 15, 0.98)",
        "card-sheen": "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, transparent 50%)",
        "luxe-glow": "radial-gradient(circle at top, rgba(236, 72, 153, 0.12), transparent 60%)",
      },
      animation: {
        fade: "fadeIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        slide: "slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
