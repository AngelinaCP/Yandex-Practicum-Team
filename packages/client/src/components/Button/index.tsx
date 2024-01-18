import React, { FC, ReactNode } from 'react'
import { ButtonStyle } from './style'

interface ButtonProps {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => (
  <ButtonStyle>{children}</ButtonStyle>
)

export default Button
