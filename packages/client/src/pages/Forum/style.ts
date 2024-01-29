import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  margin: 5rem 0;
  flex-direction: column;
  align-items: center;
`

export const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50rem;
  margin: 0.7rem auto;
  padding: 0.7rem;
  gap: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 20px -1px rgba(34, 60, 80, 0.2);
  background-color: white;
  font-family: 'Gill Sans', sans-serif;
  cursor: pointer;
`

export const Title = styled.h2`
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0.6rem auto;
  padding: 0.6rem;
  border-radius: 0.4rem;
  gap: 0.7rem;
`

export const Input = styled.input`
  color: black;
  width: 50%;
  border: none;
  outline: 0;
  font-size: 1.5rem;
  padding: 0.5rem 0;
  background: transparent;
  transition: border-color 0.2s;
`

export const StyledText = styled.textarea`
  display: block;
  width: 100%;
  height: 15rem;
  border: none;
  outline: 0;
  font-size: 1rem;
  color: black;
  padding: 0.6rem 0;
  background: transparent;
  transition: border-color 0.2s;
`

export const StyledFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 0.7rem;
  margin-top: 20px;
`

export const StyledInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.7rem;
  margin-top: 1.2rem;
`
