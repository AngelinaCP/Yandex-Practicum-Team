import styled from 'styled-components'

export const ModalStyled = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px 20px;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
`

export const ModalContentStyled = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: cornflowerblue;
`
