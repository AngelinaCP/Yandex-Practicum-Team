import type { PropsWithChildren } from 'react'
import styled from 'styled-components'

const NameStyled = styled.h2`
  margin: 0;
  font-weight: 400;
  margin-bottom: 1em;
`

function CurrentSelection({
  name,
  image,
  ...props
}: PropsWithChildren & {
  name: string
  image: string
}) {
  return (
    <div {...props}>
      <NameStyled>{name}</NameStyled>
      <img src={image} />
    </div>
  )
}

const CurrentSelectionStyled = styled(CurrentSelection)`
  display: flex;
  flex-flow: column nowrap;
  place-items: center;
  justify-content: space-between;
`

export default CurrentSelectionStyled
