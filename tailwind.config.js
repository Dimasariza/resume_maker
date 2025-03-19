import daisyui from 'daisyui';
// tailwind.config.js
module.exports = {
    content: [
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [
      daisyui
    ],
    theme: {
      extend: {
        colors: {
            'base-200': '#000000',
            customColor: "#ff5733",
        },
      },
      fontFamily: {
          sans: ['Roboto', 'sans-serif'],
      },
  },
    daisyui: {
      themes: [
        {
          light: {
            primary: "#000", // Use the custom color in a theme
            secondary: "#1e40af",
            accent: "#9333ea",
            neutral: "#3d4451",
            "base-100": "#ffffff",
          },
        },
      ],
    },
}