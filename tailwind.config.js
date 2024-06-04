/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {


    extend: {
      colors: {
        'c1': '#CA2C34',
        'c2':'#BC9A8F',
        'c3':'#816253',
        'c4':'rgba(202, 44, 52, 0.5)' 
      }, 

      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.875rem',
        'xl':'2rem',
        'lg': '1.2rem',
        'full': '9999px',
        'large': '12px',
      },

      fontSize: {
        '5vw': ['5vw', '5.4vw'],
        '4vw': ['4vw', '4.4vw'],
        '3.5vw': ['3.5vw', '3.9vw'],
        '3vw': ['3vw', '3.4vw'],
        '2vw': ['2vw', '2.4vw'],
        '1.8vw': ['1.8vw', '2.4vw'],
        '1.5vw': ['1.5vw', '1.7vw'],
        '1.2vw': ['1.2vw', '1.5vw'],
        '1.1vw': ['1.1vw', '1.4vw'],
        '1vw': ['0.88vw', '1.35vw'],
        '1.0vw': ['0.9vw', '1vw'],
      }

    },

    
  },
  plugins: [],
}
