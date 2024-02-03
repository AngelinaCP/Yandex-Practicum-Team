import { Layout } from './components/Layout'
import { CharacterSelector, ThemeSelector } from './components/GameSelector'
import { ButtonPlay } from './components/ButtonPlay'
import { LinkHome } from './components/LinkHome'

export const GameStartPage: React.FC = () => (
  <Layout>
    <CharacterSelector />
    <ThemeSelector />
    <ButtonPlay />
    <LinkHome />
  </Layout>
)
