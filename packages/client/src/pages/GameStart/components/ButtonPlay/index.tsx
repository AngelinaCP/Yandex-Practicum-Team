import ButtonPlay from './ButtonPlay'
import { Link } from 'react-router-dom'

export default ({
  label = 'Побежали',
  to = '/',
  $primary = true,
  ...props
}) => (
  <ButtonPlay as={Link} to={to} $primary={$primary} {...props}>
    {label}
  </ButtonPlay>
)
