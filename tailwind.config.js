module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jedi: '#2e9fff',
        sith: '#ff2e2e',
        starwarsGold: '#ffe81f',
        darkspace: '#0a0a0a',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui'],
        star: ['Star', 'sans-serif'],
        starwars: ['StarJedi', 'sans-serif'],
      }
    },
  },
  plugins: [],
}