import { useCallback, useState, FC } from 'react'
import { ArrowControl } from '../ArrowControl'
import { nextItem } from './nextItem'
import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { CurrentSelection } from './components/CurrentSelection'
import styled from 'styled-components'

type SelectorProps = { title: string; content: GameSkin[] }

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
  const { title, content } = selector
  const enableArrows = content.length > 1

  const [selection, setSelection] = useState(0)

  const handleChange = useCallback(
    (toLeft = false) => {
      const next = nextItem(toLeft, content.length, selection)
      return setSelection(next)
    },
    [selection]
  )

  return (
    <Layout>
      <Header>{title}</Header>
      <CurrentSelectionWithControls>
        {enableArrows && (
          <ArrowControl $toLeft={true} onClick={() => handleChange(true)} />
        )}
        <CurrentSelection
          name={content[selection].title}
          image={content[selection].thumbnail}
        />
        {enableArrows && <ArrowControl onClick={() => handleChange()} />}
      </CurrentSelectionWithControls>
    </Layout>
  )
}
