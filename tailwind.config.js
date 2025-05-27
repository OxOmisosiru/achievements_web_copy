// tailwind.config.js

module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
          fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            linejp: ['"LINESeedJP"', 'sans-serif'],
          },
          backgroundImage: {
            '50p-green-blue': 'linear-gradient(to right, #22c55e 50%, #1e3a8a 50%)',
          },

        },
      },
    
    plugins: [],
  };