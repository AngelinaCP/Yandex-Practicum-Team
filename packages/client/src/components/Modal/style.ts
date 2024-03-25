import styled from 'styled-components'

export const ModalStyled = styled.div<{
  block: string
}>`
  display: ${props => props.block && props.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

export const ModalContentStyled = styled.div`
  position: fixed;
  background: ${props => props.theme.modalBackgroundColor};
  width: 50%;
  height: auto;
  top: 50%;
  left: 50%;
  padding: 0.5rem 1rem;
  transform: translate(-50%, -50%);
  border-radius: 5px;
`

ModalContentStyled.defaultProps = {
  theme: {
    modalBackgroundColor: '#ffffff',
  },
}
