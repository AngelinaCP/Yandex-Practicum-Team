import React from 'react'
import {
  StyledWrapper,
  Container,
  StyledPost,
  Title,
  Text,
  StyledComment,
  StyledUser,
  StyledTime,
} from '@/pages/ForumPost/style'
import { useParams } from 'react-router-dom'
import { useAddCommentMutation, useGetTopicsQuery } from '@/store/api/forum'
import { StyledText } from '@/pages/Forum/style'
import Button from '@/components/Button'
import { RootState, useAppSelector } from '@/store/store'

export const ForumPostPage = () => {
  const selectUser = (state: RootState) => state.userState.user
  const selectUserId = (state: RootState) => selectUser(state)?.id
  const userId = useAppSelector(state => selectUserId(state))

  const { forumId } = useParams<{ forumId?: string }>()
  const defaultId = Number(forumId) || 1

  const { data: topicsData } = useGetTopicsQuery()

  const data = topicsData?.find(f => f.index === defaultId)

  const [addComment] = useAddCommentMutation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { topicDescription } = e.target as typeof e.target & {
      topicDescription: { value: string }
    }
    addComment({
      id: data?.index,
      message: topicDescription.value,
      authorId: userId,
    })
  }

  return (
    <StyledWrapper>
      <Container>
        <StyledPost>
          <Title>{data?.title}</Title>
          <Text>{data?.description}</Text>
          <p>{data?.author}</p>
          <StyledTime>{data?.time}</StyledTime>
        </StyledPost>
        {data?.Comments?.map(comment => (
          <StyledComment>
            <StyledUser>{comment.author}</StyledUser>
            <p>{comment.message}</p>
            <StyledTime>{comment.createdAt}</StyledTime>
          </StyledComment>
        ))}
        <StyledComment>
          <form onSubmit={handleSubmit}>
            <StyledText
              name="topicDescription"
              placeholder="Новый комментарий..."
            />
            <Button type="submit" $primary={true}>
              Отправить
            </Button>
          </form>
        </StyledComment>
      </Container>
    </StyledWrapper>
  )
}
