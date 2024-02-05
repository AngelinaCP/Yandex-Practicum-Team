import React, { FC } from 'react'
import { AvatarStyled } from '@/components/Avatar/style'

interface AvatarProps {
  image?: string
  changeAvatar: () => void
}

export const Avatar: FC<AvatarProps> = ({ image, changeAvatar }) => (
  <AvatarStyled>
    {image && (
      <img
        src={`https://ya-praktikum.tech/api/v2/resources/${image}`}
        alt="Аватар пользователя"
      />
    )}
    <div onClick={changeAvatar}>
      <span>Поменять аватар</span>
    </div>
  </AvatarStyled>
)
