module.exports = {
  // purge: [],
  purge: {
    enabled: true,
    content: ['*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#7209B7',
        danger: '#F72585',
        purple: '#3A0CA3',
        red: '#dc3545',
        'light-red': '#F72541',
        'purple-100': '#DCCCE6',
        'purple-200': '#A971CE',
        'light-purple': '#907AA6',
        'bright-purple': '#EDE0F6',
        'light-yellow': '#F5AA00',
        'dark-yellow': '#CBB747',
        gray: '#8D8D8D',
        'gray-100': '#E8E8E8',
        'gray-200': '#949494',
        'gray-300': '#D4D4D4',
        'gray-400': '#707070',
        'gray-500': '#B8B8B8',
        'light-gray': '#817885',
        'dark-gray': '#505050',
        blue: {
          100: '#4CC9F0',
          200: '#0285AE',
          300: '#4361EE',
          400: '#00B1C3',
          500: '#019FE8',
          600: '#535CA7',
          700: '#0285AE'
        },
        green: {
          100: '#9CC715',
          200: '#3C9537'
        },
        brown: '#BD9369',
        black: '#000000',
        white: '#ffffff',
      },
      fontSize: {
        'xs': '.75rem',     // 12px
        'sm': '.875rem',    // 14px
        'base': '1rem',     // 16px
        'md': '1.125rem',   // 18px
        'lg': '1.25rem',    // 20px
        'xl': '1.5rem',     // 24px
        '2xl': '1.625rem',  // 26px
        '3xl': '2rem',      // 32px
        '4xl': '2.25rem',   // 36px
        '4.25xl': '2.5rem', // 40px
        '4.5xl': '3rem',    // 48px
        '5xl': '3.3125rem', // 53px
        '6xl': '4rem',      // 64px
        '7xl': '4.5rem',    // 72px
        '8xl': '5.1875rem'  // 83px
      },
      fontFamily: {
        'Rubik': 'Rubik'
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1601px'
      },
      spacing: {
        '0.75': '0.1875rem',
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '15': '3.75rem',
        '17.5': '4.375rem',
        '18': '4.5rem',
        '21.25': '5.3125rem',
        '22': '5.5rem',
        '25': '6.25rem',
        '28.75': '7.1875rem',
        '30': '7.5rem',
        '37.5': '9.375rem',
        '85': '21.25rem',
        '10%': '10%',
        '18%': '18%',
        '29%': '29%',
        '41%': '41%',
        '44%': '44%',
        '56%': '56%',
        '59%': '59%',
        '56.25%': '56.25%',
        '71%': '71%',
        '100%': '100%',
        '0.7px': '0.7px',
        '1px': '1px',
        '1.28px': '1.28px',
        '1.4px': '1.4px',
        '1.6px': '1.6px',
        '1.8px': '1.8px',
        '2px': '2px',
        '2.4px': '2.4px',
        '2.6px': '2.6px',
        '3.6px': '3.6px'
      },
      height: {
        '[calc(100vh-5.3125rem)]': 'calc(100vh - 5.3125rem)'
      },
      maxWidth: {
        '400': '100rem'
      },
      minHeight: {
        '37.5': '9.375rem',
        '42.5': '10.625rem',
        '47.5': '11.875rem'
      },
      borderRadius: {
        '10': '0.625rem'
      },
      letterSpacing: {
        '0.7px': '0.7px',
        '1px': '1px',
        '1.28px': '1.28px',
        '1.4px': '1.4px',
        '1.6px': '1.6px',
        '1.8px': '1.8px',
        '2.4px': '2.4px',
        '2.6px': '2.6px',
        '3.6px': '3.6px',
      },
      zIndex: {
        '999': '999',
        '1000': '1000'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
