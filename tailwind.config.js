// tailwind.config.js
module.exports = {
    content: [
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [
      require("daisyui")
    ],
    theme: {
      extend: {
        colors: {
          'app-color-blue': '#0082e6',
          'app-color-purple': '#b92a78',
          'app-color-yellow': '#f3840b',
          'app-color-green': '#2ab993',
          'app-color-black': '#000000',

          "primary-muted": "oklch(var(--primary-muted) / <alpha-value>)",
        },
      },
    },
    daisyui: {
      themes: [
        {
          light: {
            ...require("daisyui/src/theming/themes")["light"],
            "--primary-muted": "65% 0.2 295",
          },
        },
        {
          cupcake: {
            ...require("daisyui/src/theming/themes")["cupcake"],
            "--primary-muted": "87% 0.05 200",
          },
        },
        // dark theme
        {
          dark: {
            ...require("daisyui/src/theming/themes")["dark"],
            "--primary-muted": "34% 0.2 289",
          },
        },
      ],
    },
}