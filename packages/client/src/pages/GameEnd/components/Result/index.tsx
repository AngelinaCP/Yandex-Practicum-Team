import { Header2 } from '@/components/Header'
import { scoreSelector } from '@/game/gameSlice'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useUpdateLeaderboardMutation } from '@/store/api/leaderboardApi'
import { useEffect } from 'react'
import { selectUser } from '@/store/features/userSlice'

const Header = styled(Header2)`
  margin-bottom: 1.5em;
  font-size: 2em;
  color: ${props => props.theme.headerColor};
`
Header.defaultProps = {
  theme: {
    headerColor: '37363F',
  },
}

export const Result: React.FC = () => {
  const silentHillScore = useSelector(scoreSelector)
  const user = useSelector(selectUser)
  const [update] = useUpdateLeaderboardMutation()

  useEffect(() => {
    update({ silentHillScore, name: user?.login ?? 'Аноним', date: Date.now() })
  }, [])

  return <Header>{silentHillScore}</Header>
}
