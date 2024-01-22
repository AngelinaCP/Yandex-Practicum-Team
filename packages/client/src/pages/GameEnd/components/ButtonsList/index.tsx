import { ButtonsList } from './ButtonsList'

const data = {
  buttons: {
    play: { to: '/game-start', title: 'Играть', $primary: true },
    profile: { to: '/profile', title: 'Профиль' },
    leaderboard: { to: '/leaderboard', title: 'Лидеры' },
    forum: { to: '/forum', title: 'Форум' },
  },
}

export const ButtonsListGameEnd = ({ buttons = data.buttons }) => (
  <ButtonsList buttons={buttons} />
)
