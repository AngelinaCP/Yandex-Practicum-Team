import React from 'react'
import styled from 'styled-components'
import Button from '@/components/Button/Button'
import { useToggle } from '@/hooks'
import { createPortal } from 'react-dom'
import { Modal } from '@/components/Modal'
import Input from '@/components/Input'

export const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  margin: 5rem 0;
  flex-direction: column;
  align-items: center;
`

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50rem;
  height: 7rem;
  margin: 10px auto;
  padding: 10px;
  border-radius: 6px;
  background-color: cornflowerblue;
`

const Text = styled.p`
  font: 15px Arial sans-serif;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`

const Title = styled.h2`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font: 20px Arial sans-serif;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50rem;
  height: 7rem;
  margin: 10px auto;
  padding: 10px;
  border-radius: 6px;
  background-color: cornflowerblue;
`

export const ForumPage = () => {
  const [showModal, toggleShowModal] = useToggle(false)

  return (
    <StyledWrapper>
      <Button onClick={toggleShowModal}>Новый пост</Button>
      <StyledPost>
        <Title>First post</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </StyledPost>
      <StyledPost>
        <Title>Second post</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </StyledPost>
      {showModal &&
        createPortal(
          <Modal>
            <Form>
              <Input label="Название" name="name" required={true} />
              <Input
                label="Пароль"
                name="password"
                type="password"
                required={true}
              />
              <Button type="submit" $primary={true}>
                войти
              </Button>
            </Form>
          </Modal>,
          document.body
        )}
    </StyledWrapper>
  )
}
