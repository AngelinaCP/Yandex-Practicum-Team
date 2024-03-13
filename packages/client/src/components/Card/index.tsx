import React, { FC, ReactNode } from 'react'
import { CardStyle } from './style'

interface CardProps {
  children: ReactNode
  width?: string
  height?: string
  className?: string
}

const Card: FC<CardProps> = ({ children, width, height, className = '' }) => {
  return (
    <CardStyle width={width} height={height} className={`${className}`}>
      {children}
    </CardStyle>
  )
}

export default Card
