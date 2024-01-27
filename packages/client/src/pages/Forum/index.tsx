import React from 'react'
import Button from '@/components/Button/Button'
import { useToggle } from '@/hooks'
import { createPortal } from 'react-dom'
import { Modal } from '@/components/Modal'
import { useNavigate } from 'react-router-dom'
import { forumDataMock } from '@/helpers/mock'
import {
  StyledWrapper,
  StyledPost,
  Title,
  StyledInfo,
  Form,
  StyledText,
  StyledFlex,
  Input,
} from '@/pages/Forum/style'

export const ForumPage = () => {
  const [showModal, toggleShowModal] = useToggle(false)
  const navigate = useNavigate()

  return (
    <StyledWrapper>
      <Button onClick={toggleShowModal}>Новый пост</Button>
      {forumDataMock.map(forum => (
        <StyledPost onClick={() => navigate(`/forum/${forum.index}`)}>
          <Title>{forum.title}</Title>
          <StyledInfo>
            <p>{forum.author}</p>
            <p>{`${forum.comments.length ?? 0} comments`}</p>
          </StyledInfo>
        </StyledPost>
      ))}
      {showModal &&
        createPortal(
          <Modal open={showModal}>
            <Form>
              <Input type="text" placeholder="Название поста" />
              <StyledText placeholder="Добавить описание..." />
              <StyledFlex>
                <Button onClick={toggleShowModal}>Отмена</Button>
                <Button type="submit" $primary={true}>
                  Сохранить
                </Button>
              </StyledFlex>
            </Form>
          </Modal>,
          document.body
        )}
    </StyledWrapper>
  )
}
