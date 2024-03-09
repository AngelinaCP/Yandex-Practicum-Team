import Button from '@/components/Button'
import { type PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styled from 'styled-components'

const LinkStyled = styled(Link)`
  text-decoration: none;
`

const ButtonL = (
  props: PropsWithChildren<
    LinkProps & { $primary?: boolean; disabled?: boolean }
  >
) => {
  return (
    <Button
      to={props.to}
      as={LinkStyled}
      $primary={props.$primary}
      disabled={props.disabled}>
      {props.children}
    </Button>
  )
}

export default ButtonL
