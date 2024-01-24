import { Layout } from './components/Layout'
import { Logo } from './components/Logo'
import { Heading } from './components/Heading'
import { Result } from './components/Result'
import { ButtonsListGameEnd } from './components/ButtonsList'
import { styled, ThemeProvider } from 'styled-components'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { ButtonPlay } from '../GameStart/components/ButtonPlay'
import tomb from './tomb.png'
import { useState } from 'react'
import bg from './bg.jpg'

const LogoStyled = styled(Logo)`
  top: 20px;
  width: 100%;
  @media (width>=768px) {
    width: 500px;
    margin-right: auto;
    margin-left: 0;
  }

  font-size: clamp(120px, 120px + 1vw, 200px);
  & span:first-child {
    font-size: 1em;
  }

  & span:last-child {
    font-size: 0.6em;
  }
`

const ButtonsContainer = styled(Card)<{ $hidden: boolean }>`
  width: auto;
  height: auto;
  /* position: absolute; */
  padding: 2em;

  bottom: 2em;
  left: 3em;
  display: ${props => (props.$hidden ? 'none' : 'block')}

  }
`

const ResultContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(16px, 16px + 2vw, 3em);
  line-height: 1.5;
  display: flex;
  flex-flow: column nowrap;

  .result {
    margin-bottom: 2rem;
  }
  .buttonPlay {
    font-size: 1em;
    width: auto;
    height: auto;
    line-height: 1.5;
  }
`

const LeftColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  max-width: 100vw;
  height: 100%;

  @media (width<900px) {
    width: 100%;
  }

  .buttonsList {
    z-index: 1;
    /* @media (width<=900px) {
      display: none;
    } */
  }
`

const LayoutStyled = styled(Layout)`
  backdrop-filter: saturate(80%) blur(8px) opacity(65%) grayscale(96.4%);
  /* @media (width >900px) {
      background-repeat: no-repeat;
      background-position: bottom right;
      background-size: auto 200px;
      background-image: url(${tomb});
  } */
`
const Background = styled.div`
  background-size: cover;
  background-image: url(${bg});
  min-width: 100vw;
  min-height: 100vh;
  background-position: center;
`

/*<ThemeProvider theme={{ color: '#36395a', dark: { color: '#fff' } }}>*/
export const GameEndPage: React.FC = () => {
  const [hidden, setHidden] = useState(true)

  console.log(window.innerWidth)
  return (
    <Background>
      <LayoutStyled>
        <LeftColumn>
          <LogoStyled />

          <ButtonsContainer className="buttonsList" $hidden={hidden}>
            <ButtonsListGameEnd />
          </ButtonsContainer>
          <Button className="menu" onClick={() => setHidden(c => !c)}>
            Menu
          </Button>
        </LeftColumn>
        <ResultContainer>
          <ThemeProvider theme={{ color: 'white', dark: { color: '#fff' } }}>
            <Heading />
            <Result className="result" />
          </ThemeProvider>
          <ButtonPlay className="buttonPlay">Заново</ButtonPlay>
        </ResultContainer>
      </LayoutStyled>
    </Background>
  )
}
