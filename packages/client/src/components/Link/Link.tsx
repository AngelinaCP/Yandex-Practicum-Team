import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkStyled = styled(Link)`
  text-decoration: none;
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${props => props.theme.color};
  }

  @media (prefers-color-scheme: dark) {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: ${props => props.theme.dark.color};
    }
  }
`

LinkStyled.defaultProps = {
  theme: {
    dark: { color: '#acbdd8' },
    color: '#281768',
  },
}

export default LinkStyled
