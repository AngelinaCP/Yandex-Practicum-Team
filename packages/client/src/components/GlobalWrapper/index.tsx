import styled from 'styled-components'

export const GlobalWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};

  &.dark-theme {
    background-color: ${props => props.theme.dark.backgroundColor};
    color: #ffffff;
  }

  &.light-theme {
    background-color: ${props => props.theme.backgroundColor};
    color: #36395a;
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
