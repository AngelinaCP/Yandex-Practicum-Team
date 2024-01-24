import { ButtonStyled } from './ButtonStyled'
import { Link } from 'react-router-dom'

const data = {
  label: 'Побежали',
  to: '/game',
  $primary: true,
}

export const ButtonPlay = ({
  to = data.to,
  $primary = data.$primary,
  label = data.label,
}) => (
  <ButtonStyled as={Link} to={to} $primary={$primary}>
    {label}
  </ButtonStyled>
)
