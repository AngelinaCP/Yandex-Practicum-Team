import React, { FC } from 'react'
import Logo from '@/components/Logo'
import Card from '@/components/Card'
import ButtonLink from '@/components/ButtonLink'
import {
  StyledBG,
  StyledInnerWrapper,
  StyledMainWrapper,
} from '@/pages/Main/style'

export const MainPage: FC = () => {
  return (
    <StyledMainWrapper>
      <Logo />
      <StyledInnerWrapper>
        <Card height="300px" width="300px">
          <ButtonLink to="/game-start" $primary={true}>
            играть
          </ButtonLink>
          <ButtonLink to="/profile">профиль</ButtonLink>
          <ButtonLink to="/leaderboard">лидеры</ButtonLink>
          <ButtonLink to="/forum">форум</ButtonLink>
        </Card>
        <StyledBG />
        <p>
          В этой игре нужно бежать, преодолевать препятствия, и пробежать дальше
          всех.
        </p>
      </StyledInnerWrapper>
    </StyledMainWrapper>
  )
}
