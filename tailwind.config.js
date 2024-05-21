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
      }, 

      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'xl':'2rem',
        'lg': '1.8rem',
        'full': '9999px',
        'large': '12px',
      }

    },

    
  },
  plugins: [],
}
