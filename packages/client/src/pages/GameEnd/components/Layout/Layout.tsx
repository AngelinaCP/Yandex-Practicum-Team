import styled from 'styled-components'

const Layout = styled.section`
  padding: 5em 0;
  margin: 0 auto;
  text-align: center;
  position: relative;
  inset: 0;
  background-color: ${props => props.theme.darkBlue95};
  min-height: 100vh;
`

Layout.defaultProps = {
  theme: {
    darkBlue95: '#3b4269e1',
  },
}

export default Layout
