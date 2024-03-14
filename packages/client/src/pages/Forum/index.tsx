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
import { useCreateTopicMutation, useGetTopicsQuery } from '@/store/api/forum'
// import {useAppDispatch, useAppSelector} from "@/hooks"

export const ForumPage = () => {
  const [showModal, toggleShowModal] = useToggle(false)
  const navigate = useNavigate()
  const {
    data: topicsData,
    error: topicsError,
    isLoading: topicsIsLoading,
  } = useGetTopicsQuery()
  const [createTopic] = useCreateTopicMutation()

  return (
    <StyledWrapper>
      <Button onClick={toggleShowModal}>Новый пост</Button>
      {topicsIsLoading ? (
        <code>Topics are loading</code>
      ) : topicsError ? (
        <code>Failed to get topics</code>
      ) : (
        topicsData &&
        topicsData.map(topic => (
          <StyledPost onClick={() => navigate(`/forum/${topic.topicIndex}`)}>
            <Title>{topic.title}</Title>
            <StyledInfo>
              <p>{topic.author}</p>
              <p>{`${topic.comments.length ?? 0} comments`}</p>
            </StyledInfo>
          </StyledPost>
        ))
      )}
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
