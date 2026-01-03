/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        // Background colors - Light mode
        'bg-primary-light': colors.white,           // #ffffff - main background
        'bg-secondary-light': colors.neutral[50],   // #fafafa - card backgrounds
        'bg-tertiary-light': colors.neutral[100],   // #f5f5f5 - hover states

        // Background colors - Dark mode
        'bg-primary-dark': '#000000',               // pure black - main background
        'bg-secondary-dark': '#1a1a1a',             // card backgrounds
        'bg-tertiary-dark': '#1a1a1a',              // hover states

        // Text colors - Light mode
        'text-primary-light': colors.neutral[800],  // #1f2937 - main text
        'text-secondary-light': colors.neutral[600], // #4b5563 - secondary text
        'text-tertiary-light': colors.neutral[400], // #9ca3af - muted text

        // Text colors - Dark mode
        'text-primary-dark': colors.neutral[100],   // #f3f4f6 - main text
        'text-secondary-dark': colors.neutral[400], // #9ca3af - secondary text
        'text-tertiary-dark': colors.neutral[500],  // #6b7280 - muted text

        // Border colors - Light mode
        'border-primary-light': colors.neutral[300], // #d1d5db - main borders
        'border-secondary-light': colors.neutral[200], // #e5e7eb - subtle borders

        // Border colors - Dark mode
        'border-primary-dark': colors.neutral[700],  // #374151 - main borders
        'border-secondary-dark': colors.neutral[600], // #4b5563 - subtle borders

        // Accent colors (links, highlights) - Light mode
        'accent-light': colors.sky[600],            // #0284c7 - links
        'accent-light-hover': colors.sky[700],      // #0369a1 - link hover

        // Accent colors - Dark mode
        'accent-dark': colors.sky[500],             // #0ea5e9 - links
        'accent-dark-hover': colors.sky[400],       // #38bdf8 - link hover

        // Code block colors - Light mode
        'code-bg-light': colors.neutral[100],       // #f3f4f6
        'code-text-light': colors.red[600],         // #dc2626
        'code-block-bg-light': colors.neutral[800], // #1f2937
        'code-block-border-light': colors.neutral[700], // #374151

        // Code block colors - Dark mode
        'code-bg-dark': colors.slate[800],          // #1e293b
        'code-text-dark': colors.red[400],          // #f87171
        'code-block-bg-dark': colors.slate[900],    // #0f172a
        'code-block-border-dark': colors.slate[700], // #334155
      },
    },
  },
  plugins: [],
}
