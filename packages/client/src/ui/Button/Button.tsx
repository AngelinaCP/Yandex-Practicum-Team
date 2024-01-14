import styled from 'styled-components'

const ButtonStyled = styled.button.attrs<{ $primary?: boolean; type?: string }>(
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
  border: 0;
  padding: 1em 0;
  min-width: 15em;
  font-size: 1.25em;
  border-radius: 10px;
  cursor: pointer;

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

ButtonStyled.defaultProps = {
  theme: {
    dark: {
      primaryBackground: '#aa278e',
      buttonBackground: '#abbebe',
      primaryColor: '#ffe030',
      buttonColor: '#abd0d3',
    },
    primaryBackground: '#6d055f',
    buttonBackground: '#abbebe',
    primaryColor: '#69c4ee',
    buttonColor: '#1a195e',
  },
}

export default ButtonStyled
