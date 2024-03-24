import styled from 'styled-components'

export const InputWrapperStyle = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 200px;
  font-family: inherit;

  &:last-of-type {
    margin-bottom: 40px;
  }
`

export const InputStyle = styled.input`
  padding: 7px 0;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-family: inherit;
  font-size: 18px;
  color: ${props => props.theme.inputColor};
  background: transparent;
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 0s 600000s, color 0s 600000s;
  }

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    top: 20px;
    cursor: text;
    font-size: 1.3rem;
  }

  &:focus {
    ~ label {
      position: absolute;
      top: -8px;
      display: block;
      font-size: 1em;
      font-weight: 700;
      letter-spacing: 1px;
      color: #81ecec;
      transition: 0.2s;
    }

    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #3b3b3b, #81ecec);
    border-image-slice: 1;
  }
`

export const InputLabelStyle = styled.label`
  position: absolute;
  top: -8px;
  display: block;
  font-family: inherit;
  font-size: 20px;
  color: ${props => props.theme.color};
  transition: 0.2s;
`

InputLabelStyle.defaultProps = {
  theme: {
    dark: {
      color: '#9b9b9b',
    },
    color: '#9b9b9b',
  },
}
