import { Link } from 'react-router-dom'
import Button from '@/components/Button'
import styled from 'styled-components'

type ButtonPlayProps = {
  to?: string
  primary?: boolean
}

export const ButtonPlay = styled(Button).attrs<ButtonPlayProps>(
  ({ to = '/game', primary = true, children = 'Побежали' }) => ({
    as: Link,
    to,
    $primary: primary,
    children,
  })
)`
  text-decoration: none;
  margin: 0 auto 3em;
  max-width: 10em;
  margin-bottom: 1.5em;
`
