import React from 'react'
import Button from '@/components/Button/Button'
import { useToggle } from '@/hooks'
import { createPortal } from 'react-dom'
import { Modal } from '@/components/Modal'
import { useNavigate } from 'react-router-dom'
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
import { RootState, useAppSelector } from '@/store/store'
import Link from '@/components/Link'

export const ForumPage = () => {
  const selectUser = (state: RootState) => state.userState.user
  const selectUserId = (state: RootState) => selectUser(state)?.id
  const userId = useAppSelector(state => selectUserId(state))

  const [showModal, toggleShowModal] = useToggle(false)
  const navigate = useNavigate()
  const {
    data: topicsData,
    error: topicsError,
    isLoading: topicsIsLoading,
  } = useGetTopicsQuery()
  const [createTopic] = useCreateTopicMutation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { topicName, topicDescription } = e.target as typeof e.target & {
      topicName: { value: string }
      topicDescription: { value: string }
    }
    createTopic({
      title: topicName.value,
      description: topicDescription.value,
      author: userId,
    })
    toggleShowModal()
  }

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
          <StyledPost onClick={() => navigate(`/forum/${topic.index}`)}>
            <Title>{topic.title}</Title>
            <StyledInfo>
              <p>{topic.author}</p>
              <p>{`${topic.Comments?.length ?? 0} comments`}</p>
            </StyledInfo>
          </StyledPost>
        ))
      )}
      <Link to="/">вернуться на главную</Link>
      {showModal &&
        createPortal(
          <Modal open={showModal}>
            <Form onSubmit={handleSubmit}>
              <Input
                name="topicName"
                type="text"
                placeholder="Название поста"
              />
              <StyledText
                name="topicDescription"
                placeholder="Добавить описание..."
              />
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
