import styled from 'styled-components'

interface Props {
  width?: string
  height?: string
}

export const CardStyle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.width || '70vw'};
  height: ${props => props.width || '70vh'};
  margin: 40px auto;
  padding: 10px;
  border-radius: 6px;
  background-color: ${props => props.theme.backgroundColor};
  box-shadow: ${props => props.theme.boxShadow};

  @media (prefers-color-scheme: dark) {
    box-shadow: ${props => props.theme.dark.boxShadow};
    background-color: ${props => props.theme.dark.backgroundColor};
  }
`

CardStyle.defaultProps = {
  theme: {
    dark: {
      boxShadow: 'rgba(255, 255, 255, 0.30)' + ' 0px 10px 50px 10px',
      backgroundColor: '#37363F',
    },
    boxShadow: 'rgba(0, 0, 0, 0.56)' + ' 0px 22px 70px 4px',
    backgroundColor: '#ffffff',
  },
}
