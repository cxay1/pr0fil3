export default {
  // 1. Enable dark mode via class strategy
  darkMode: 'class',
  // 2. Specify the content files that Tailwind should scan
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 3. Extend the default color palette
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}