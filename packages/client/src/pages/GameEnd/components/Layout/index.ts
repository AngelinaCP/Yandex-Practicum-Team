import styled from 'styled-components'
import Card from '@/components/Card'

export const Layout = styled(Card)`
  cursor: default;
  width: auto;
  height: auto;
  padding: 3em;
  text-align: center;
`

Layout.defaultProps = {
  theme: {
    darkBlue95: '#3b4269e1',
  },
}
