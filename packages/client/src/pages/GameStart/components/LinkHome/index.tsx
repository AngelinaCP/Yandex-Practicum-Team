import LinkHome from './LinkHome'

export default ({ link = '/', label = 'На главную' }) => (
  <LinkHome to={link}>{label}</LinkHome>
)
