import Button from '@/components/Button'
import { type PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styled from 'styled-components'

const LinkStyled = styled(Link)`
  text-decoration: none;
`

const ButtonL = (
  props: PropsWithChildren<LinkProps & { $primary?: boolean }>
) => (
  <Button to={props.to} as={LinkStyled} $primary={props.$primary}>
    {props.children}
  </Button>
)

export default ButtonL
