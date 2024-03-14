import { Arrow } from './components/Arrow'
import styled from 'styled-components'

type ArrowControlProps = {
  $toLeft?: boolean
}

export const ArrowControl = styled.button.attrs<ArrowControlProps>(
  ({ $toLeft = false }) => ({
    children: <Arrow toLeft={$toLeft} />,
  })
)`
  background: none;
  border: 0;
  cursor: pointer;
  fill: ${props => props.theme.gameSelectorArrowFill};
`

ArrowControl.defaultProps = {
  theme: {
    gameSelectorArrowFill: '#6d6c6c',
  },
}
