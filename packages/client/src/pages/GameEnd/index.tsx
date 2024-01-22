import { Layout } from './components/Layout'
import { Logo } from './components/Logo'
import { Result } from './components/Result'
import { ButtonsListGameEnd } from './components/ButtonsList'

export const GameEndPage = () => {
  return (
    <Layout>
      <Logo />
      <Result />
      <ButtonsListGameEnd />
    </Layout>
  )
}
