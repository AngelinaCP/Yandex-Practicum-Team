import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
      <nav>
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
            <Link to="/game">Игра</Link>
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
      </nav>
    </>
  )
}

export default Navigation
