import styled from 'styled-components'
import Card from '@/components/Card'

export const Layout = styled.section`
  cursor: default;

  position: absolute;
  inset: 0;

  /* padding: 1em 3em; */

  min-width: 100vw;

  min-height: 100vh;
  /* padding: 2em; */
  text-align: center;
  display: flex;
  flex-flow: row wrap;
`

Layout.defaultProps = {
  theme: {
    darkBlue95: '#3b4269e1',
  },
}
