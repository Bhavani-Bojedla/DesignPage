/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'bg-1': '#373A44',
        'bg-2':'#191B1F',
        'side-1':'#363C44',
        'div-1':'#282828',
        'div-2':'#F8F8F8',
        'que-1':'#4A4E54',
        'que-2':'#A3ADBA',
        'bar-1':'#888989',
        'bar-2':'#4A4E54'
      },
      backgroundImage: {
        'que': "url('Vector.png')",
        'box':"url(Frame.png)",
        'left':"url('Component1.png')",
        'right':"url('Component2.png')",
        'rect':"url(Rectangle.png)"
      },
      spacing:{
        11:'2.7rem',
        92:'550px',
        96:'280px',
        95:'400px',
        98:'612px',
        100:'720px',
        120:'300px',
        110:'900px',
        150:'1519.55px'
      },
      screens: {
        '2560': '1800px'
      },
    },
  },
  plugins: [],
}

