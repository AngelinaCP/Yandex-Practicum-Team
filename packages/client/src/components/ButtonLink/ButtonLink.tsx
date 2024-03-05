import Button from '@/components/Button'
import { type PropsWithChildren, useContext } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '@/context/ThemeProvider'

const LinkStyled = styled(Link)`
  text-decoration: none;
`

const ButtonL = (
  props: PropsWithChildren<
    LinkProps & { $primary?: boolean; disabled?: boolean }
  >
) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Button
      className={theme}
      to={props.to}
      as={LinkStyled}
      $primary={props.$primary}
      disabled={props.disabled}>
      {props.children}
    </Button>
  )
}

export default ButtonL
