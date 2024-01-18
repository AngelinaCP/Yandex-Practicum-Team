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
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.56) 0 22px 70px 4px;
`
