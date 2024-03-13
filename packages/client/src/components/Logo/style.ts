import styled from 'styled-components'

export const LogoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.color};

  & span {
    font-family: 'Silent Hill', monospace;
    line-height: 100px;
  }

  & span:first-child {
    font-size: 180px;
  }

  & span:last-child {
    font-size: 80px;
  }
`
