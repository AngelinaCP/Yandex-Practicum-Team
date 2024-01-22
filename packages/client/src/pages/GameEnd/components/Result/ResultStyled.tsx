import { Header2 } from '@/components/Header'
import styled from 'styled-components'

export const ResultStyled = styled(Header2)`
  margin-bottom: 4em;
  font-size: 2em;
  color: ${props => props.theme.color};

  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.dark.color};
  }
`

ResultStyled.defaultProps = {
  theme: {
    dark: {
      color: '#ffffff',
    },
    color: '#37363F',
  },
}
