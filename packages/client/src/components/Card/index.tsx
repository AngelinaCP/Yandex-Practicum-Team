import React, { FC, ReactNode, useContext } from 'react'
import { CardStyle } from './style'
import { ThemeContext } from '@/context/ThemeProvider'

interface CardProps {
  children: ReactNode
  width?: string
  height?: string
  className?: string
}

const Card: FC<CardProps> = ({ children, width, height, className = '' }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <CardStyle
      width={width}
      height={height}
      className={`${className} ${theme}`}>
      {children}
    </CardStyle>
  )
}

export default Card
