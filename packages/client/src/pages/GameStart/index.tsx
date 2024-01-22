import { Layout } from './components/Layout'
import { Logo } from './components/Logo'
import { CharacterSelector, ThemeSelector } from './components/GameSelector'
import { ButtonPlay } from './components/ButtonPlay'
import { LinkHome } from './components/LinkHome'

export const GameStartPage = () => {
  return (
    <Layout>
      <Logo />
      <CharacterSelector />
      <ThemeSelector />
      <ButtonPlay />
      <LinkHome />
    </Layout>
  )
}
