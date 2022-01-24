module.exports = {
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:  {
        'img-top': "url('/images/bg-topo.png')"
      },

      colors: {
        bgtop:'#e3effe',
        titles: '#545454',
        blue: '#2B66BD',
        gray: '#545454',
        orange: '#FF6000',
        horange:'#FE9A2E',
      },
      fontSize: {
        ftsqr: '14px',
        ftctatop: '18px',
        ft: '24px',
        tth1: ['32px', {lineHeight: '40px'}]
      },
      fontFamily: {
        pp: ['Poppins'],
        mt: ['Montserrat'],
        rb: ['Roboto']
      },
      fontWeight: {
        'extra-bold': 700,
      },
      width: {
          '96':'32rem',
      },
      margin: {
        '96px': '96px',
      },

    }, 
  },


  variants: {
    extend: {},
  },
  plugins: [],
}
