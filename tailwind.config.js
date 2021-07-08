module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bing': "url('https://cn.bing.com/th?id=OHR.LakeUrmia_ZH-CN4941337431_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp')",
        'sea': "url('https://images.unsplash.com/photo-1625584121020-26233d0d3be1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80')",
        'mount': "url('https://images.unsplash.com/photo-1625526439553-08baa1794618?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=80')",
        'forest': "url('https://images.unsplash.com/photo-1624860916247-ff55fef72e76?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
