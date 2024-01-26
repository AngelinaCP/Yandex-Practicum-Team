import styled from 'styled-components'

export const GlobalWrapper = styled.div`
  display: flex;
  width: 100%;
  /* height: 100%; */
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.dark.backgroundColor};
  }
`

GlobalWrapper.defaultProps = {
  theme: {
    dark: {
      backgroundColor: '#37363F',
    },
    backgroundColor: '#FFFFFF',
  },
}
