import styled from 'styled-components'

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
  }
`

export const StyledBG = styled.div`
  width: 50vw;
  height: 60vh;
  background: url('/images/girl.webp') center no-repeat;
  min-height: 500px;
`
