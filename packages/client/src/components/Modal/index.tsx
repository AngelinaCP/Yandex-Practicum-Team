import { MouseEventHandler, ReactNode } from 'react'
import { ModalStyled, ModalContentStyled } from '@/components/Modal/style'

interface Props {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
  open: boolean
}

export const Modal = ({ children, onClick, open }: Props) => {
  return (
    <ModalStyled onClick={onClick} block={open ? 'block' : 'none'}>
      <ModalContentStyled>{children}</ModalContentStyled>
    </ModalStyled>
  )
}
