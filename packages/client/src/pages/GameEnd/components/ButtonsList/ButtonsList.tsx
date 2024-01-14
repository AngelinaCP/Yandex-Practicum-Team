import styled from 'styled-components'
import { FC, PropsWithChildren } from 'react'
import ButtonLink from '@/ui/ButtonLink'

type TButton = { title: string; to: string; $primary?: boolean }
type TButtons = { [key: string]: TButton }

const ButtonsList: FC<PropsWithChildren & { buttons: TButtons }> = ({
  buttons,
  ...props
}) => {
  return (
    <ul {...props}>
      {Object.entries(buttons).map(([key, { to, ...buttonDetails }]) => (
        <li key={key}>
          <ButtonLink to={to} {...buttonDetails}>
            {buttonDetails.title}
          </ButtonLink>
        </li>
      ))}
    </ul>
  )
}

const ButtonsListStyled = styled(ButtonsList)`
  list-style: none;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 2.5em;
`

export default ButtonsListStyled
