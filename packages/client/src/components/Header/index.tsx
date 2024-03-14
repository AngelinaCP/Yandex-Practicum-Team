import styled from 'styled-components'

// type THeaders = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const header = ([headerTag]: TemplateStringsArray) => styled(headerTag)`
  color: ${props => props.theme.headerColor};
`
const defaultTheme = {
  headerColor: '#37363F',
}

const Header1 = header`h1`
Header1.defaultProps = { theme: defaultTheme }
const Header2 = header`h2`
Header2.defaultProps = { theme: defaultTheme }
const Header3 = header`h3`
Header3.defaultProps = { theme: defaultTheme }
const Header4 = header`h4`
Header4.defaultProps = { theme: defaultTheme }
const Header5 = header`h5`
Header5.defaultProps = { theme: defaultTheme }
const Header6 = header`h6`
Header6.defaultProps = { theme: defaultTheme }

export { Header1, Header2, Header3, Header4, Header5, Header6 }
