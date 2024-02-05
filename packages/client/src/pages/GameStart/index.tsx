import { Layout } from './components/Layout'
import { PlayerSelector, BackgroundSelector } from './components/GameSelector'
import { ButtonPlay } from './components/ButtonPlay'
import { LinkHome } from './components/LinkHome'

export const GameStartPage: React.FC = () => (
  <Layout>
    <PlayerSelector />
    <BackgroundSelector />
    <ButtonPlay />
    <LinkHome />
  </Layout>
)
