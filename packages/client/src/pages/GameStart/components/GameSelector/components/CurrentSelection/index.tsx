import type { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Header3 } from '@/components/Header'

const NameStyled = styled(Header3)`
  margin: 0;
  font-weight: 400;
  margin-bottom: 1em;
`
const ImgStyled = styled.img`
  padding: 0 2rem;
  height: 130px;
  width: auto;
`

type CurrentSelectonProps = {
  name: string
  image: string
} & HTMLAttributes<HTMLDivElement>

const CurrentSelection_: FC<CurrentSelectonProps> = ({
  name,
  image,
  className = '',
}) => (
  <div className={className}>
    <NameStyled>{name}</NameStyled>
    <ImgStyled src={image} />
  </div>
)

export const CurrentSelection = styled(CurrentSelection_)`
  display: flex;
  flex-flow: column nowrap;
  place-items: center;
  justify-content: space-between;
  overflow: hidden;
  margin: 0 auto;
`
