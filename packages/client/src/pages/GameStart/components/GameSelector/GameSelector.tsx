import { PropsWithChildren, useCallback, useState } from 'react'
import ArrowControl from '../ArrowControl'
import { nextItem } from './nextItem'
import SelectorHeader from './components/Header'
import CurrentSelection from './components/CurrentSelection'
import styled from 'styled-components'

type TSelector = {
  title: string
  content: { name: string; image: string }[]
}

const SectionStyled = styled.section`
  margin: 0;
  margin-bottom: 3em;
`

const DivStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  place-items: center;
  justify-content: space-between;
`

export default function GameSelector(selector: TSelector) {
  const { title, content } = selector

  return function (props: PropsWithChildren) {
    const [selection, setSelection] = useState(0)

    const handleChange = useCallback(
      (toLeft = true) => {
        const next = nextItem(toLeft, content.length, selection)
        return setSelection(next)
      },
      [selection]
    )

    return (
      <SectionStyled {...props}>
        <SelectorHeader>{title}</SelectorHeader>
        <DivStyled>
          <ArrowControl toLeft={true} onClick={() => handleChange(true)} />
          <CurrentSelection
            name={content[selection].name}
            image={content[selection].image}
          />
          <ArrowControl onClick={() => handleChange()} />
        </DivStyled>
      </SectionStyled>
    )
  }
}
