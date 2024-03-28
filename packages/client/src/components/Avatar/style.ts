import styled from 'styled-components'

export const AvatarStyled = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;
  width: 130px;
  height: 130px;
  background: url('/images/default_avatar.svg') center / 45px no-repeat;
  border-radius: 65px;

  img {
    width: 130px;
    height: 130px;
    border-radius: 65px;
    object-fit: cover;
  }

  div {
    display: flex;
    position: absolute;
    inset: 0;
    border-radius: 65px;
    margin: 0;

    span {
      display: none;
      margin: auto;
      max-width: 70px;
      text-align: center;
      font-weight: 500;
      font-size: 13px;
      line-height: 14px;
      color: $white;
    }

    &:hover {
      background-color: rgb(0 0 0 / 50%);
      cursor: pointer;

      span {
        display: flex;
      }
    }
  }
`
