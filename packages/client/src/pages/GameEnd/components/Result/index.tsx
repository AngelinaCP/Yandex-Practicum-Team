import { Header2 } from '@/components/Header'
import styled from 'styled-components'

type ResultProps = { result: string }

const data: ResultProps = {
  result: '13:00:34',
}

export const Result = styled(Header2).attrs<Partial<ResultProps>>(
  ({ children = data.result }) => ({
    children,
  })
)`
  margin-bottom: 1.5em;
  font-size: 2em;
  color: ${props => props.theme.color};

  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.dark.color};
  }
`

Result.defaultProps = {
  theme: {
    dark: {
      color: '#ffffff',
    },
    color: '#37363F',
  },
}
