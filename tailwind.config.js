module.exports = {
  content: ['./index.html'],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins, sans-serif'],
        'gaul':['Changa, sans-serif']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
}
