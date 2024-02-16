import { useGetLeaderboardQuery } from '@/store/api/leaderboardApi'
import {
  StyledGrid,
  StyledLayout,
  StyledTd,
  StyledTh,
  StyledTitle,
} from '@/pages/Leaderboard/style'

export const LeaderboardPage = () => {
  const { data, isLoading } = useGetLeaderboardQuery(null)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <StyledLayout>
      <StyledTitle>Лидеры</StyledTitle>
      <StyledGrid>
        <StyledTh>Логин</StyledTh>
        <StyledTh>Очки</StyledTh>
        <StyledTh>Дата</StyledTh>
        {data &&
          data.map(item => {
            return (
              <>
                <StyledTd>{item.data.name}</StyledTd>
                <StyledTd>{item.data.silentHillScore}</StyledTd>
                <StyledTd>
                  {new Date(item.data.date).toLocaleDateString()}
                </StyledTd>
              </>
            )
          })}
      </StyledGrid>
    </StyledLayout>
  )
}
