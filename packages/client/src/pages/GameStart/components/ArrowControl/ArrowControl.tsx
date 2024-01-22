import type { ButtonHTMLAttributes, FC } from 'react'
import { Arrow } from './Arrow'
import styled from 'styled-components'

type ArrowControlProps = {
  toLeft?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const ArrowControl_: FC<ArrowControlProps> = ({
  toLeft = false,
  onClick,
  className,
}) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      <Arrow toLeft={toLeft} />
    </button>
  )
}

export const ArrowControl = styled(ArrowControl_)`
  background: none;
  border: 0;
  cursor: pointer;
  fill: ${props => props.theme.arrowFill};

  @media (prefers-color-scheme: dark) {
    fill: ${props => props.theme.dark.arrowFill};
  }
`

ArrowControl.defaultProps = {
  theme: {
    dark: {
      arrowFill: '#acaa9e',
    },
    arrowFill: '#6d6c6c',
  },
}
