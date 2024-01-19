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
  font-size: 18px;
  white-space: nowrap;
  line-height: 1;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  will-change: box-shadow, transform;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 2px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
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
  }
`

Button.defaultProps = {
  theme: {
    dark: {
      primaryBackground: '#aa278e',
      buttonBackground: '#fcfcfd',
      primaryColor: '#ffe030',
      buttonColor: '#36395a',
    },
    primaryBackground: '#6d055f',
    buttonBackground: '#abbebe',
    primaryColor: '#69c4ee',
    buttonColor: '#1a195e',
  },
}

export default Button
