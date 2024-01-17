import * as React from 'react'
import { AuthService } from '@/services/auth.service'
import { LocalStorageService } from '@/services/localStorage.service'
import useAuth from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  function handleSubmitf(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      login: { value: string }
      password: { value: string }
    }
    const login = target.login.value
    const password = target.password.value
    const authService = new AuthService()
    const storage = new LocalStorageService()
    authService.login({ login, password }).then(() => {
      storage.setItem('isAuth', 'true')
      setAuth(true)
      navigate('/game')
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmitf}>
        <div>
          <label htmlFor="login">Логин</label>
          <input type="text" name="login" id="login" />
        </div>
        <div>
          <label htmlFor="password">Пароль</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}

export default LoginPage
