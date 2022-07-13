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
      'medium': '940px', /* 90px + 240px + 20px + 240px + 20px + 240px + 90px = 940px*/
      'large': '1200px', /* 90px + 240px + 20px + 240px + 20px + 240px + 20px + 240px + 90px = 1200px*/
    },
    letterSpacing: {
      'separation': '1.25px'
    },
    extend: {
      backgroundOpacity: {
        '54': '0.54'
       },
      borderOpacity: {
        '38': '0.38'
      },
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