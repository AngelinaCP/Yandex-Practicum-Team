import { Header2 } from '@/components/Header'
import { scoreSelector } from '@/game/gameSlice'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Header = styled(Header2)`
  margin-bottom: 1.5em;
  font-size: 2em;
  color: ${props => props.theme.color};

  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.dark.color};
  }
`

Header.defaultProps = {
  theme: {
    dark: {
      color: '#ffffff',
    },
    color: '#37363F',
  },
}

export const Result: React.FC = () => {
  const score = useSelector(scoreSelector)

  return <Header>{score}</Header>
}
