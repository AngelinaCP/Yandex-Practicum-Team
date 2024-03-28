import { ThemeEnum } from '@/enums'

export const themes = [
  {
    name: ThemeEnum.darkTheme,
    colors: {
      backgroundColor: '#36395a',
      color: '#FFFFFF',
      boxShadow: 'rgba(255, 255, 255, 0.30)' + ' 0px 10px 50px 10px',
      primaryBackground: '#01BBBB',
      buttonBackground: '#fcfcfd',
      primaryColor: '#FFFFFF',
      buttonColor: '#36395a',
      inputColor: '#c8fff0',
      linkColor: '#c92c51',
      primaryBoxShadow:
        '0px -3px 0px 0px ' +
        '#128EB5' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(129, 236, 236, 0.2)' +
        ', 0px 4px 8px 0px ' +
        'rgba(149, 159, 243, 0.3)',
      focusPrimaryBoxShadow:
        '0px 0px 0px 2px ' +
        '#128EB5' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(129, 236, 236, 0.4)' +
        ', 0px 2px 4px 0px ' +
        'rgba(149, 159, 243, 0.3)' +
        ', 0px 3px 0px ' +
        '#128EB5' +
        ' inset',
      hoverPrimaryBoxShadow:
        '0px 0px 0px 2px ' +
        '#128EB5' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(129, 236, 236, 0.4)' +
        ', 0px 4px 8px 0px ' +
        'rgba(149, 159, 243, 0.3)',
      activePrimaryBoxShadow: '0px 3px 7px 0px ' + '#128EB5' + ' inset',
      boxShadowBtn:
        '0px -3px 0px 0px ' +
        '#B5B5D8' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(45, 33, 66, 0.4)' +
        ', 0px 3px 6px 0px ' +
        'rgba(255, 255, 255, 0.3)',
      focusBoxShadow:
        '0px 0px 0px 2px ' +
        '#B5B5D8' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(45, 33, 66, 0.4)' +
        ', 0px 2px 4px 0px ' +
        'rgba(255, 255, 255, 0.3)' +
        ', 0px -3px 0px ' +
        '#B5B5D8' +
        ' inset',
      hoverBoxShadow:
        '0px -3px 0px 0px ' +
        '#B5B5D8' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(45, 33, 66, 0.4)' +
        ', 0px 4px 8px 0px ' +
        'rgba(255, 255, 255, 0.3)',
      activeBoxShadow: '0px 3px 7px 0px ' + '#B5B5D8' + ' inset',
      headerColor: '#ffffff',
      modalBackgroundColor: '#37363F',
      gameSelectorArrowFill: '#acaa9e',
    },
  },
  {
    name: ThemeEnum.lightTheme,
    colors: {
      backgroundColor: '#FFFFFF',
      color: '#36395a',
      boxShadow: 'rgba(0, 0, 0, 0.56)' + ' 0px 22px 70px 4px',
      primaryBackground: '#9BC8AD',
      buttonBackground: '#fcfcfd',
      primaryColor: '#FFFFFF',
      buttonColor: '#36395a',
      inputColor: '#36395A',
      linkColor: '#acbdd8',
      primaryBoxShadow:
        '0px -3px 0px 0px ' +
        'rgba(139,182,143,0.58)' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(45, 33, 66, 0.4)' +
        ', 0px 4px 4px 0px ' +
        'rgba(0, 0, 0, 0.3)',
      focusPrimaryBoxShadow:
        '0px -3px 0px 0px ' +
        'rgba(139,182,143,0.58)' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(45, 33, 66, 0.25)' +
        ', 0px 2px 4px 0px ' +
        'rgba(0, 0, 0, 0.25)' +
        ', 0px 3px 0px ' +
        'rgba(139,182,143,0.58)' +
        ' inset',
      hoverPrimaryBoxShadow:
        '0px 0px 0px 2px ' +
        'rgba(139,182,143,0.58)' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(45, 33, 66, 0.25)' +
        ', 0px 4px 8px 0px ' +
        'rgba(0, 0, 0, 0.25)',
      activePrimaryBoxShadow:
        '0px 3px 7px 0px ' + 'rgba(139,182,143,0.58)' + ' inset',
      boxShadowBtn:
        '0px -3px 0px 0px ' +
        '#D6D6E7' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(45, 33, 66, 0.25)' +
        ', 0px 4px 4px 0px ' +
        'rgba(45, 35, 66, 0.25)',
      focusBoxShadow:
        '0px 0px 0px 2px ' +
        '#D6D6E7' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(45, 33, 66, 0.25)' +
        ', 0px 2px 4px 0px ' +
        'rgba(45, 35, 66, 0.25)' +
        ', 0px -3px 0px ' +
        '#D6D6E7' +
        ' inset',
      hoverBoxShadow:
        '0px -3px 0px 0px ' +
        '#D6D6E7' +
        ' inset' +
        ', 0px 7px 13px -3px ' +
        'rgba(45, 33, 66, 0.4)' +
        ', 0px 4px 8px 0px ' +
        'rgba(45, 35, 66, 0.3)',
      activeBoxShadow: '0px 3px 7px 0px ' + '#D6D6E7' + ' inset',
      headerColor: '#37363F',
      modalBackgroundColor: '#ffffff',
      gameSelectorArrowFill: '#6d6c6c',
    },
  },
]
