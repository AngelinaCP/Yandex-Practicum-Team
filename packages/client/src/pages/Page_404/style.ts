import styled from 'styled-components'

export const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  & span:first-of-type {
    font-size: 150px;
    line-height: 100px;
    color: ${props => props.theme.color};
  }

  & span:last-of-type {
    font-size: 40px;
    color: ${props => props.theme.color};
  }
`
