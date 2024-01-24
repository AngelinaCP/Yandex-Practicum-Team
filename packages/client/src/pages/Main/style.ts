import styled from 'styled-components'
import girl from '../../assets/images/girl.webp'

export const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledInnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 80px;

  & div:first-of-type {
    padding-top: 30px;
  }

  & p {
    position: absolute;
    bottom: 30px;
    color: ${props => props.theme.color};

    @media (prefers-color-scheme: dark) {
      color: ${props => props.theme.dark.color};
    }
  }
`

export const StyledBG = styled.div`
  width: 50vw;
  height: 60vh;
  background: url(${girl}) center no-repeat;
`

StyledInnerWrapper.defaultProps = {
  theme: {
    dark: {
      color: '#ffffff',
    },
    color: '#37363F',
  },
}
