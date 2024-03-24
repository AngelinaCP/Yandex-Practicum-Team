import styled from 'styled-components'
import fullscreen from '../../assets/images/fullscreen.svg'

export const FullScreenEnterButtonWrapper = styled.section`
  position: absolute;
  width: 800px;
  height: 400px;
  padding-left: 30px;
  background: transparent;
`
export const FullScreenEnterButton = styled.button`
  position: relative;
  display: flex;
  margin-top: 20px;
  margin-left: auto;
  width: 40px;
  height: 40px;
  background: url(${fullscreen}) center no-repeat;
  border: none;
  cursor: pointer;
`
