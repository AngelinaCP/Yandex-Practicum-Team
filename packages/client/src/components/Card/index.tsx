import React, { FC, ReactNode } from 'react'
import { CardStyle } from './style'

interface CardProps {
  children: ReactNode
  width?: string
  height?: string
}

const Card: FC<CardProps> = ({ children, width, height }) => (
  <CardStyle width={width} height={height}>
    {children}
  </CardStyle>
)

export default Card
