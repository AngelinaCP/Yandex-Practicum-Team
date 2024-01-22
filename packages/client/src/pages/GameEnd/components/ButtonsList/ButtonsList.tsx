import styled from 'styled-components'
import { FC, HTMLAttributes } from 'react'
import ButtonLink from '@/components/ButtonLink'

type ButtonProps = { title: string; to: string; $primary?: boolean }
type ButtonsProps = { [key: string]: ButtonProps }

const ButtonsList_: FC<
  { buttons: ButtonsProps } & HTMLAttributes<HTMLUListElement>
> = ({ buttons, className = '' }) => {
  return (
    <ul className={className}>
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

export const ButtonsList = styled(ButtonsList_)`
  list-style: none;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1em;
  text-align: center;
`
