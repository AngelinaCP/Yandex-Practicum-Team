import styled from 'styled-components'
import Card from '@/components/Card'

export const Layout = styled(Card)`
  cursor: default;
  max-width: 400px;
  margin-top: 20px;
  height: auto;
  padding: 2em;
  text-align: center;
`

Layout.defaultProps = {
  theme: {
    darkBlue95: '#3b4269e1',
  },
}
