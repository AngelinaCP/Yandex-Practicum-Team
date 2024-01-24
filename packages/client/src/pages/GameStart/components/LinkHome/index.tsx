import { LinkStyled } from './LinkStyled'

type LinkHomeProps = {
  link?: string
  label?: React.ReactNode
}

export const LinkHome = ({
  link = '/',
  label = 'На главную',
}: LinkHomeProps) => <LinkStyled to={link}>{label}</LinkStyled>
