import { SVGAttributes, type FC } from 'react'
import styled from 'styled-components'

type ArrowProps = {
  toLeft?: boolean
} & SVGAttributes<SVGElement>

const Arrow: FC<ArrowProps> = ({
  toLeft = true,
  width = '32',
  height = '96',
  viewBox = '0 0 32 96',
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      {toLeft ? (
        <>
          <path d="M32 0L26.1053 4.42013e-07L0 48H6L32 0Z" />
          <path d="M32 96H26L0 48H6L32 96Z" />
        </>
      ) : (
        <>
          <path d="M0 0L5.89474 4.42013e-07L32 48H26L0 0Z" />
          <path d="M0 96H6L32 48H26L0 96Z" />
        </>
      )}
    </svg>
  )
}

const ArrowStyled = styled(Arrow)`
  fill: ${props => props.theme.arrowFill};
  @media (prefers-color-scheme: dark) {
    fill: ${props => props.theme.dark.arrowFill};
  }
`

ArrowStyled.defaultProps = {
  theme: {
    dark: {
      arrowFill: '#acaa9e',
    },
    arrowFill: '#6d6c6c',
  },
}

export default ArrowStyled
