/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      colors: {
        'custom-yellow': '#ffb135',
        'btn-bg':'#ff9d00',
        'about-text-col':'#7f0b28',
        'about-footer':'#ffbf35',
        'box-editiorial':'#4054b2'
      },
      backgroundColor: {
        'footer-bg':'#1b1b1b;',
      },
      margin: {
        '-10': '-10px',
      },
      textColor : {
        'footer-text':'#929292;'
      },
      fontFamily: {
        'Helvetica': ['Helvetica', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat-subrayada': ['Montserrat Subrayada', 'Sans-serif'],
        'Trebuchet':['Trebuchet MS','Tahoma, sans-serif']
      },
      fontSize: {
        '14':'14px',
        '19':'19px',
        '20':'20px',
        '23':'23px',
        '25':'25px',
        '29':'29px',
        '40': '40px',
        '44': '44px',
        '54': '54px',
        '50': '50px',
        '85':'85px',
      },
      letterSpacing: {
       'latter-spacing':'12px',
      },
      height:{
        '1':'1px',
        '340':'340px',
        '400':'400px',
        '460':'460px',
        '600':'600px',

      },
      animation: {
        'fade-up': 'fadeUp 1s ease-in-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(0px)' },
          '100%': { opacity: '1', transform: 'translateY(10)' },
        },
      },
      
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      "border-r-r":'50%'
    }
    },
  
  plugins: [],
}

