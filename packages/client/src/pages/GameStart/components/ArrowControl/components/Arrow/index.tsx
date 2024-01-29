import { SVGAttributes, type FC } from 'react'
import arrowsSvg from './arrows.svg'

type ArrowProps = {
  toLeft?: boolean
} & SVGAttributes<SVGElement>

export const Arrow: FC<ArrowProps> = ({ toLeft = true }) => (
  <svg width={32} height={96}>
    <use href={`${arrowsSvg + (toLeft ? '#arrowLeft' : '#arrowRight')}`} />
  </svg>
)
