import styled from 'styled-components'
import { Header1 } from '@/components/Header'

type HeaderProps = {
  children: React.ReactNode
}

const data = {
  header: 'Результат',
}

export const Heading = styled(Header1).attrs<Partial<HeaderProps>>(
  ({ children = data.header }) => ({
    children,
  })
)`
  margin: 1rem auto 2rem;
`
