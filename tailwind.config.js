module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bing': "url('https://www.bing.com/th?id=OHR.PeruvianRainforest_ZH-CN4066508593_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
