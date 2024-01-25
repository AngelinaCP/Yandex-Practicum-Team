import React from 'react'
import styled from 'styled-components'
import Button from '@/components/Button/Button'
import { useToggle } from '@/hooks'
import { createPortal } from 'react-dom'
import { Modal } from '@/components/Modal'

export const StyledForum = styled.div`
  display: flex;
  height: 100%;
  margin: 5rem 0;
  flex-direction: column;
  align-items: center;
`

const Card = styled.div`
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
  font: 20px Arial sans-serif;
`

export const ForumPage = () => {
  const [showModal, toggleShowModal] = useToggle(false)

  return (
    <StyledForum>
      <Button onClick={toggleShowModal}>Новый пост</Button>
      <Card>
        <Title>First topic</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Card>
      <Card>
        <Title>Second topic</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Card>
      {showModal &&
        createPortal(
          <Modal onClick={toggleShowModal}>COIOIO</Modal>,
          document.body
        )}
    </StyledForum>
  )
}
