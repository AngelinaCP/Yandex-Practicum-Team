import styled from 'styled-components'
import ButtonLink from '@/components/ButtonLink'

type ButtonsProps = { buttons?: { [key: string]: ButtonProps } }
type ButtonProps = { title: string; to: string; $primary?: boolean }

const data: ButtonsProps = {
  buttons: {
    play: { to: '/game-start', title: 'Играть', $primary: true },
    profile: { to: '/profile', title: 'Профиль' },
    leaderboard: { to: '/leaderboard', title: 'Лидеры' },
    forum: { to: '/forum', title: 'Форум' },
  },
}

export const ButtonsListGameEnd = styled.ul.attrs<ButtonsProps>(
  ({ buttons = data.buttons ?? [] }) => ({
    children: Object.entries(buttons).map(
      ([key, { to, title, $primary = false }]) => (
        <li key={key}>
          <ButtonLink to={to} $primary={$primary}>
            {title}
          </ButtonLink>
        </li>
      )
    ),
  })
)`
  list-style: none;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1em;
  text-align: center;
`
