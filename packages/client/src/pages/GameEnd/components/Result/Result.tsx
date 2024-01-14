import { Header2 } from '@/ui/Header'
import styled from 'styled-components'

const Result = styled(Header2)`
  margin-bottom: 4em;
  font-size: 2em;
  font-family: monospace;
  color: ${props => props.theme.white};
`

Result.defaultProps = {
  theme: {
    white: '#fcfce4',
  },
}

export default Result
