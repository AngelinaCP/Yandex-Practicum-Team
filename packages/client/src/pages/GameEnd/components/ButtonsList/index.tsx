import ButtonsList from './ButtonsList'

export default ({
  buttons = {
    play: { to: '/game-start', title: 'Играть', $primary: true },
    profile: { to: '/profile', title: 'Профиль' },
    leaderboard: { to: '/leaderboard', title: 'Лидеры' },
    forum: { to: '/forum', title: 'Форум' },
  },
  ...props
}) => <ButtonsList buttons={buttons} {...props} />
