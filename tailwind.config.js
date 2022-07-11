module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'small': '692px', /* 24px + 312px + 20px + 312px + 24px = 692px*/
      'medium': '1024px', /* 24px + 312px + 20px + 312px + 20px + 312px + 24px = 1024px*/
      'large': '1356px', /* 24px + 312px + 20px + 312px + 20px + 312px + 20px + 312px + 24px = 1356px*/
    },
    spacing: {
      '0': '0px',
      '1.5': '6px',
      '4.75': '19px',
      '5.25': '21px',
      '6': '24px',
      '6.25': '26px',
      '8': '32px',
      '10': '40px',
      '11.5': '46px',
      '12': '48px',
      '12.25': '49px',
      '15': '60px',
      '18': '72px',
      '26': '104px',
      '30': '120px',
      '35': '140px',
      '50': '200px',
      '52.5': '210px',
      '78': '312px',
      '90': '360px',
      '105': '420px',
      '150': '600px'
    },
    extend: {
      boxShadow: {
        'headerShaow': '2px 0px 8px 2px rgba(0, 0, 0, 0.1)',
        'footerShaow': '-2px 0px 8px 2px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        'Karla': ['Karla'],
      },
    },
  },
  plugins: [],
}