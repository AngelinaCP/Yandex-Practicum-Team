import { MouseEventHandler, ReactNode } from 'react'
import { ModalStyled, ModalContentStyled } from '@/components/Modal/style'

interface Props {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const Modal = ({ children, onClick }: Props) => {
  return (
    <ModalStyled onClick={onClick}>
      <ModalContentStyled>{children}</ModalContentStyled>
    </ModalStyled>
  )
}
