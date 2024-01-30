import Logo from '@/components/Logo'
import styled from 'styled-components'

const LogoGameStart = styled(Logo)`
  padding-top: 0.5em;
  font-size: 50px;

  & span {
    line-height: 0.8;
  }

  & span:first-child {
    font-size: 1.8em;
  }

  & span:last-child {
    font-size: 0.8em;
  }
`

export { LogoGameStart as Logo }
