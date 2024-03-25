import { SVGAttributes, type FC } from 'react'

type ArrowProps = {
  toLeft?: boolean
} & SVGAttributes<SVGElement>

export const Arrow: FC<ArrowProps> = ({ toLeft = true }) => {
  const arrowPath = '/images/arrows.svg'
  return (
    <svg width={32} height={96}>
      <use
        href={toLeft ? arrowPath + '#arrowLeft' : arrowPath + '#arrowRight'}
      />
    </svg>
  )
}
