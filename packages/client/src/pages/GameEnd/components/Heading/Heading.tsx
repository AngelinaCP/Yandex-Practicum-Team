import { Header1 } from '@/ui/Header'
import styled from 'styled-components'

const Heading = styled(Header1)`
  margin: 0;
  font-size: 2.75em;
  font-weight: 800;
  margin-bottom: 2em;
  color: ${props => props.theme.white};
`

Heading.defaultProps = {
  theme: {
    white: '#fcfce4',
  },
}

export default Heading
