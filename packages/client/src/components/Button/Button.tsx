import styled from 'styled-components'

const Button = styled.button.attrs<{
  $primary?: boolean
  type?: string
  disabled?: boolean
}>(props => ({
  type: props.type || 'button',
  $primary: props.$primary ?? false,
  disabled: props.disabled ?? false,
}))`
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
    props.$primary ? props.theme.primaryBoxShadow : props.theme.boxShadowBtn};

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
`

export default Button
