/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "style.css"],
  theme: {
    extend: {
      screens: {
        smallPhone: {
          min: "280px",
          max: "320px",
        },
      },

      keyframes: {
        fadeInHeroImage: {
          from: {
            opacity: "0.5",
            transform: "translate3d(0, -80%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },

        fadeInHeroTagline: {
          from: {
            opacity: "0.5",
            transform: "translate3d(0, -20%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },

        fadeInHowItWorks: {
          from: {
            opacity: "0.5",
            transform: "translate3d(0, 20%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },

        fadeInHowItWorksCards: {
          from: {
            opacity: "0.5",
            transform: "translate3d(0, 80%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        fadeInHeroTagline: "fadeInHeroTagline 1s",
        fadeInHeroImage: "fadeInHeroImage 1s",
        fadeInHowItWorks: "fadeInHowItWorks 1s",
        fadeInHowItWorksCards: "fadeInHowItWorksCards 1s",
      },
      colors: {
        menucolor: "#8D8D91",
      },
      // transition: ["group-hover", "hover"],
    },
  },
  plugins: [],
};
