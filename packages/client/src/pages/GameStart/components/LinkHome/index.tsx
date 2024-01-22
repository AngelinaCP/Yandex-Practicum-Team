import { LinkStyled } from './LinkStyled'

export const LinkHome = ({ link = '/', label = 'На главную' }) => (
  <LinkStyled to={link}>{label}</LinkStyled>
)
