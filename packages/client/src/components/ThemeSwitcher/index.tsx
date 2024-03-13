import styled from 'styled-components'

export const ThemeSwitcher = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 60px;
  height: 30px;
  border-radius: 30px;
  background-color: #333;
  position: relative;
  transition: all 0.5s ease-in;
  cursor: pointer;
  z-index: 1;

  &::before {
    content: '';
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #eee;
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    transition: all 0.5s ease-in;
  }

  &:checked {
    background: #03ffc0;
  }

  &:checked::before {
    background: #333;
    left: 32px;
  }
`
