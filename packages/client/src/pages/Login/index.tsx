import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button/index'
import Link from '@/components/Link'
import { LoaderSpinner } from '@/components/Loading'
import { StyledForm } from '@/pages/Login/style'
import { useLoginUserMutation } from '@/store/api/authApi'
import { errorMessage } from '@/store/api/types'

export const LoginPage: FC = () => {
  const navigate = useNavigate()
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation()

  useEffect(() => {
    if (isSuccess) return navigate('/')
    if (
      isError &&
      ((error as errorMessage)?.data?.reason === 'User already in system' ||
        (error as errorMessage)?.error?.data?.reason ===
          'User already in system')
    )
      return navigate('/')
  }, [isSuccess, isError])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { login, password } = event.target as typeof event.target & {
      login: { value: string }
      password: { value: string }
    }
    loginUser({ login: login.value, password: password.value })
  }

  return (
    <Card width="300px" height="340px">
      {isLoading && <LoaderSpinner />}
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
