import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button/index'
import Link from '@/components/Link'
import { StyledForm } from '@/pages/Login/style'
import { AuthService } from '@/services'
import useAuth from '@/hooks/useAuth'

export const LoginPage = () => {
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      login: { value: string }
      password: { value: string }
    }
    const login = target.login.value
    const password = target.password.value
    const auth = new AuthService()
    auth.login({ login, password }).then(() => {
      setAuth(true)
      navigate('/')
    })
  }

  return (
    <Card width="300px" height="340px">
      <StyledForm onSubmit={handleSubmit}>
        <Input label="Логин" name="login" />
        <Input label="Пароль" type="password" name="password" />
        <Button type="submit" $primary={true}>
          войти
        </Button>
        <Link to="/signup">регистрация</Link>
      </StyledForm>
    </Card>
  )
}
