import styled from 'styled-components'

export const InputStyle = styled.input`
  padding: 7px 0;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-family: inherit;
  font-size: 18px;
  color: #000000;
  background: transparent;
  transition: border-color 0.2s;

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
      font-size: 22px;
      font-weight: 700;
      color: #3b3b3b;
      transition: 0.2s;
    }

    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #3b3b3b, #81ecec);
    border-image-slice: 1;
  }
`
export const InputWrapperStyle = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 200px;
  font-family: 'JetBrains Mono', monospace;
  &:last-of-type {
    margin-bottom: 60px;
  }
`
export const InputLabelStyle = styled.label`
  position: absolute;
  top: -8px;
  display: block;
  font-family: inherit;
  font-size: 20px;
  color: #9b9b9b;
  transition: 0.2s;
`
