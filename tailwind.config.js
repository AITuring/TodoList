module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bing': "url('https://cn.bing.com/th?id=OHR.LakeUrmia_ZH-CN4941337431_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
