import { Layout } from './components/Layout'
import { Heading } from './components/Heading'
import { Result } from './components/Result'
import { ButtonsListGameEnd } from './components/ButtonsList'

export const GameEndPage: React.FC = () => {
  return (
    <Layout>
      <Heading />
      <Result />
      <ButtonsListGameEnd />
    </Layout>
  )
}
