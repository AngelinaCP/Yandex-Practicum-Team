import Layout from './components/Layout'
import Header from './components/Header'
import { CharacterSelector, ThemeSelector } from './components/GameSelector'
import ButtonPlay from './components/ButtonPlay'
import LinkHome from './components/LinkHome'

const GameStartPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <CharacterSelector />
        <ThemeSelector />
        <ButtonPlay />
        <LinkHome />
      </Layout>
    </>
  )
}

export default GameStartPage
