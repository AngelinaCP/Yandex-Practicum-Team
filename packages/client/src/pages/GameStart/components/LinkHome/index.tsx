import Link from '@/components/Link'
import { LinkProps } from 'react-router-dom'
import styled from 'styled-components'

export const LinkHome = styled(Link).attrs<Partial<LinkProps>>(
  ({ to = '/', children = 'На главную' }) => ({
    to,
    children,
  })
)`
  display: inline-block;
  text-decoration: none;
  max-width: fit-content;
  padding: 0.5em 1.5em;
  margin: 0 auto;
`
