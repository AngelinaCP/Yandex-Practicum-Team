import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkStyled = styled(Link)`
  text-decoration: none;
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${props => props.theme.linkColor};
  }
`

export default LinkStyled
