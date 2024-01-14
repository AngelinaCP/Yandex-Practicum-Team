import styled from 'styled-components'

const Layout = styled.main`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.dark.backgroundColor};
    color: ${props => props.theme.dark.color};
  }
`

Layout.defaultProps = {
  theme: {
    dark: {
      backgroundColor: '#4a4a4a',
      color: '#fcfce4',
    },
    backgroundColor: '#fcfce4',
    color: '#4a4a4a',
  },
}

export default Layout
