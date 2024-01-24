import { Layout } from './components/Layout'
import { Logo } from './components/Logo'
import { Heading } from './components/Heading'
import { Result } from './components/Result'
import { ButtonsListGameEnd } from './components/ButtonsList'

export const GameEndPage: React.FC = () => {
  return (
    <>
      <Logo />
      <Layout>
        <Heading />
        <Result />
        <ButtonsListGameEnd />
      </Layout>
    </>
  )
}
