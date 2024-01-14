import type { ButtonHTMLAttributes, FC } from 'react'
import Arrow from './Arrow'
import styled from 'styled-components'

type TArrowControl = {
  toLeft?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const ArrowControl: FC<TArrowControl> = ({ toLeft = false, ...props }) => {
  return (
    <button type="button" {...props}>
      <Arrow toLeft={toLeft} />
    </button>
  )
}

const ArrowControlStyled = styled(ArrowControl)`
  background: none;
  border: 0;
  cursor: pointer;
`

export default ArrowControlStyled
