import { useGetLeaderboardQuery } from '@/store/api/leaderboardApi'
import {
  StyledGrid,
  StyledLayout,
  StyledTd,
  StyledTh,
  StyledTitle,
} from '@/pages/Leaderboard/style'
import { LoaderSpinner } from '@/components/Loading'
import { Fragment } from 'react'
import Link from '@/components/Link'

export const LeaderboardPage = () => {
  const { data, isLoading } = useGetLeaderboardQuery(null)

  if (isLoading) {
    return <LoaderSpinner />
  }

  return (
    <StyledLayout>
      <StyledTitle>Лидеры</StyledTitle>
      <StyledGrid>
        <StyledTh>Логин</StyledTh>
        <StyledTh>Очки</StyledTh>
        <StyledTh>Дата</StyledTh>
        {data &&
          data.map(item => (
            <Fragment key={String(item.data.date)}>
              <StyledTd>{item.data.name}</StyledTd>
              <StyledTd>{item.data.silentHillScore}</StyledTd>
              <StyledTd>
                {new Date(item.data.date).toLocaleDateString()}
              </StyledTd>
            </Fragment>
          ))}
      </StyledGrid>
      <Link to="/">вернуться на главную</Link>
    </StyledLayout>
  )
}
