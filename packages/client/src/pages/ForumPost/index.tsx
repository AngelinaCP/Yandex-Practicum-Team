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
import { forumDataMock } from '@/helpers/mock'

export const ForumPostPage = () => {
  const { forumId } = useParams<{ forumId?: string }>()
  const defaultId = Number(forumId) || 1
  const data = forumDataMock.find(f => f.index === defaultId)

  return (
    <StyledWrapper>
      <Container>
        <StyledPost>
          <Title>{data?.title}</Title>
          <Text>{data?.message}</Text>
          <p>{data?.author}</p>
          <StyledTime>{data?.time}</StyledTime>
        </StyledPost>
        {data?.comments.map(comment => (
          <StyledComment>
            <StyledUser>{comment.author}</StyledUser>
            <p>{comment.message}</p>
            <StyledTime>{comment.time}</StyledTime>
          </StyledComment>
        ))}
      </Container>
    </StyledWrapper>
  )
}
