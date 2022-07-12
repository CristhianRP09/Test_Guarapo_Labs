module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
    '1': '1px',
    '1.5': '1.5px'
  },
    screens: {
      'small': '692px', /* 24px + 312px + 20px + 312px + 24px = 692px*/
      'medium': '1024px', /* 24px + 312px + 20px + 312px + 20px + 312px + 24px = 1024px*/
      'large': '1356px', /* 24px + 312px + 20px + 312px + 20px + 312px + 20px + 312px + 24px = 1356px*/
    },
    letterSpacing: {
      'separation': '1.25px'
    },
    spacing: {
      '3/10': '30%',
      '0': '0px',
      '1.5': '6px',
      '3': '12px',
      '3.0625': '12.5px',
      '3.375': '13.5px',
      '4': '16px',
      '4.65': '18.6px',
      '4.75': '19px',
      '5': '20px',
      '5.25': '21px',
      '5.375': '21.5px',
      '6': '24px',
      '6.25': '26px',
      '8': '32px',
      '10': '40px',
      '11.5': '46px',
      '12': '48px',
      '12.25': '49px',
      '14': '56px',
      '15': '60px',
      '18': '72px',
      '26': '104px',
      '30': '120px',
      '35': '140px',
      '50': '200px',
      '52.5': '210px',
      '57': '228px',
      '62': '248px',
      '66': '264px',
      '75.5': '302px',
      '78': '312px',
      '90': '360px',
      '105': '420px',
      '108.5': '434px',
      '150': '600px',
      '161': '644px'
    },
    extend: {
      outlineWidth: {
        'none': '0px',
      },
      colors: {
        '#E3F2FD': '#e3f2fd',
        '#2196F3': '#2196f3'
      },
      boxShadow: {
        'headerShadow': '2px 0px 8px 2px rgba(0, 0, 0, 0.1)',
        'footerShadow': '-2px 0px 8px 2px rgba(0, 0, 0, 0.1)',
        'advancedOptionsShadow': '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)'
      },
      fontFamily: {
        'Karla': ['Karla'],
        'roboto': ['Roboto']
      },
    },
  },
  plugins: [],
}