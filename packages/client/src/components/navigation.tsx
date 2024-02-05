import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  position: absolute;
  top: 10px;
  left: 50%;
  width: 50%;
  transform: translate(-50%, 0);

  & ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
  }

  & a {
    color: red;
  }
`

function Navigation() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/login">Логин</Link>
        </li>
        <li>
          <Link to="/signup">Регистрация</Link>
        </li>
        <li>
          <Link to="/game-start">Игра</Link>
        </li>
        <li>
          <Link to="/profile">Профиль</Link>
        </li>
        <li>
          <Link to="/leaderboard">Результаты</Link>
        </li>
        <li>
          <Link to="/forum">Форум</Link>
        </li>
        <li>
          <Link to="/topic">Топик</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default Navigation
