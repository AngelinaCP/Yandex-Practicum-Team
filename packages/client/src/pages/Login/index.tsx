import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthService } from '@/services/auth.service'
import { LocalStorageService } from '@/services/localStorage.service'
import useAuth from '@/hooks/useAuth'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button/index'
import Link from '@/components/Link'
import { StyledForm } from '@/pages/Login/style'

export const LoginPage = () => {
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
      navigate('/')
    })
  }

  return (
    <Card width="300px" height="340px">
      <StyledForm onSubmit={handleSubmit}>
        <Input label="Логин" name="login" required={true} />
        <Input label="Пароль" name="password" type="password" required={true} />
        <Button type="submit" $primary={true}>
          войти
        </Button>
        <Link to="/signup">регистрация</Link>
      </StyledForm>
    </Card>
  )
}
