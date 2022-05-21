module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-sun': 'spin 20s linear infinite',
        'spin-mercury': 'spin 4s linear infinite',
        'spin-venus': 'spin 20s linear infinite',
        'spin-earth': 'spin 30s linear infinite',
        'spin-mars': 'spin 57s linear infinite',
        'spin-jupiter': 'spin 361s linear infinite',
        'spin-saturn': 'spin 890s linear infinite',
        'spin-uranus': 'spin 2557s linear infinite',
        'spin-neptune': 'spin 5015s linear infinite',
      },
    },
  },
  plugins: [],
}
