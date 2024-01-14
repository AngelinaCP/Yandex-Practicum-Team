import styled from 'styled-components'
import { Link, type LinkProps } from 'react-router-dom'
import Button from '@/ui/Button'
import { PropsWithChildren, type FC } from 'react'

const ButtonLink = styled(Link)`
  display: block;
  text-decoration: none;
`

const ButtonL: FC<
  PropsWithChildren & LinkProps & { $primary?: boolean; primary?: boolean }
> = props => <Button as={ButtonLink} {...props} />

export default ButtonL
