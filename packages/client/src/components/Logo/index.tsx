import { FC, HTMLAttributes } from 'react'
import { LogoStyle } from './style'

const Logo: FC<HTMLAttributes<HTMLDivElement>> = ({ className = '' }) => (
  <LogoStyle className={className}>
    <span>Silent Hill</span>
    <span>runner</span>
  </LogoStyle>
)

export default Logo
