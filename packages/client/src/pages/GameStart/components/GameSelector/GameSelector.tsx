import { useCallback, FC } from 'react'
import { ArrowControl } from '../ArrowControl'
import { nextItem } from './nextItem'
import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { CurrentSelection } from './components/CurrentSelection'
import styled from 'styled-components'
import {
  backgroundSelector,
  playerSelector,
  setBackground,
  setPlayer,
} from '@/game/gameSlice'
import { useSelector, useDispatch } from 'react-redux'

type SelectorProps = {
  title: string
  content: Record<string, GameSkin>
  storeSetter: typeof setBackground | typeof setPlayer
  storeSelector: typeof backgroundSelector | typeof playerSelector
}

export type GameSelectorProps = {
  selector: SelectorProps
}

const CurrentSelectionWithControls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  place-items: center;
  justify-content: space-between;
`

export const GameSelector: FC<GameSelectorProps> = ({ selector }) => {
  const gameStore = useSelector(selector.storeSelector)
  const dispatch = useDispatch()
  const { title, content } = selector
  const selectorOptions = Object.keys(content)
  const enableArrows = selectorOptions.length > 1

  const handleChange = useCallback(
    (toLeft = false) => {
      const next = nextItem(
        toLeft,
        selectorOptions.length,
        selectorOptions.indexOf(gameStore)
      )
      dispatch(selector.storeSetter(selectorOptions[next]))
    },
    [gameStore]
  )
  return (
    <Layout>
      <Header>{title}</Header>
      <CurrentSelectionWithControls>
        {enableArrows && (
          <ArrowControl $toLeft={true} onClick={() => handleChange(true)} />
        )}
        <CurrentSelection
          name={content[gameStore].title}
          image={content[gameStore].thumbnail}
        />
        {enableArrows && <ArrowControl onClick={() => handleChange()} />}
      </CurrentSelectionWithControls>
    </Layout>
  )
}
