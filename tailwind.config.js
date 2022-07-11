module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    spacing: {
      '15': '60px',
      '90': '360px'
    },
    extend: {
      boxShadow: {
        'headerShaow': '2px 0px 8px 2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}