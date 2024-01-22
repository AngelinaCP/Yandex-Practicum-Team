import { useCallback, useState } from 'react'
import { ArrowControl } from '../ArrowControl'
import { nextItem } from './nextItem'
import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { CurrentSelection } from './components/CurrentSelection'
import styled from 'styled-components'

type GameSelectorProps = {
  title: string
  content: { name: string; image: string }[]
}

const CurrentSelectionWithControls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  place-items: center;
  justify-content: space-between;
`

export function gameSelectorGenerator(selector: GameSelectorProps) {
  const { title, content } = selector

  return function () {
    const [selection, setSelection] = useState(0)

    const handleChange = useCallback(
      (toLeft = true) => {
        const next = nextItem(toLeft, content.length, selection)
        return setSelection(next)
      },
      [selection]
    )

    return (
      <Layout>
        <Header>{title}</Header>
        <CurrentSelectionWithControls>
          <ArrowControl toLeft={true} onClick={() => handleChange(true)} />
          <CurrentSelection
            name={content[selection].name}
            image={content[selection].image}
          />
          <ArrowControl onClick={() => handleChange()} />
        </CurrentSelectionWithControls>
      </Layout>
    )
  }
}
