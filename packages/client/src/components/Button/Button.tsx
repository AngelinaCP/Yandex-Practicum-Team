import styled from 'styled-components'

const Button = styled.button.attrs<{ $primary?: boolean; type?: string }>(
  props => ({
    type: props.type || 'button',
    $primary: props.$primary ?? false,
  })
)`
  background-color: ${props =>
    props.$primary
      ? props.theme.primaryBackground
      : props.theme.buttonBackground};
  color: ${props =>
    props.$primary ? props.theme.primaryColor : props.theme.buttonColor};
  position: relative;
  display: inline-flex;
  overflow: hidden;
  height: 48px;
  width: 200px;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 20px;
  align-items: center;
  appearance: none;
  cursor: pointer;
  touch-action: manipulation;
  border-radius: 4px;
  border-width: 0;
  font-family: 'horror', monospace;
  font-size: 18px;
  letter-spacing: 2px;
  white-space: nowrap;
  line-height: 1;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  will-change: box-shadow, transform;
  box-shadow: ${props =>
    props.$primary ? props.theme.primaryBoxShadow : props.theme.boxShadow};

  &:focus {
    box-shadow: ${props =>
      props.$primary
        ? props.theme.focusPrimaryBoxShadow
        : props.theme.focusBoxShadow};
  }

  &:hover {
    box-shadow: ${props =>
      props.$primary
        ? props.theme.hoverPrimaryBoxShadow
        : props.theme.hoverBoxShadow};
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: ${props =>
      props.$primary
        ? props.theme.activePrimaryBoxShadow
        : props.theme.activeBoxShadow};
    transform: translateY(2px);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${props =>
      props.$primary
        ? props.theme.dark.primaryBackground
        : props.theme.dark.buttonBackground};
    color: ${props =>
      props.$primary
        ? props.theme.dark.primaryColor
        : props.theme.dark.buttonColor};
    box-shadow: ${props =>
      props.$primary
        ? props.theme.dark.primaryBoxShadow
        : props.theme.dark.boxShadow};
    &:focus {
      box-shadow: ${props =>
        props.$primary
          ? props.theme.dark.focusPrimaryBoxShadow
          : props.theme.dark.focusBoxShadow};
    }

    &:hover {
      box-shadow: ${props =>
        props.$primary
          ? props.theme.dark.hoverPrimaryBoxShadow
          : props.theme.dark.hoverBoxShadow};
    }

    &:active {
      box-shadow: ${props =>
        props.$primary
          ? props.theme.dark.activePrimaryBoxShadow
          : props.theme.dark.activeBoxShadow};
    }
  }
`

Button.defaultProps = {
  theme: {
    dark: {
      primaryBackground: '#01BBBB',
      buttonBackground: '#fcfcfd',
      primaryColor: '#FFFFFF',
      buttonColor: '#36395a',
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
      boxShadow:
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
    },
    primaryBackground: '#9BC8AD',
    buttonBackground: '#fcfcfd',
    primaryColor: '#FFFFFF',
    buttonColor: '#36395a',
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
    boxShadow:
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
  },
}

export default Button
