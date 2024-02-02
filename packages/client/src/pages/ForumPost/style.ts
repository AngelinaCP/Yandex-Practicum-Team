import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: aliceblue;
  padding: 5rem 0;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

export const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50rem;
  margin: 0.7rem auto;
  padding: 1.3rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 20px -1px rgba(34, 60, 80, 0.2);
  background-color: white;
  cursor: pointer;
  gap: 0.9rem;
`

export const Container = styled.div`
  display: block;
`

export const Title = styled.h2`
  width: 100%;
  font: 1.8rem 'Gill Sans';
  font-weight: 700;
`

export const Text = styled.p`
  font: 1.2rem 'Gill Sans';
  width: 100%;
`

export const StyledComment = styled.p`
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem 2rem;
  font: 1rem 'Gill Sans';
  border-radius: 0.3rem;
  background-color: white;
  box-shadow: 0 0 20px -1px rgba(34, 60, 80, 0.2);
  margin: 1rem 0;
`

export const StyledUser = styled.p`
  color: cornflowerblue;
`

export const StyledTime = styled.p`
  color: #afaeae;
`
