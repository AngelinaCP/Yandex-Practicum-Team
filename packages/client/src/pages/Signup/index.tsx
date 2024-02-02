import React, { useEffect } from 'react'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Link from '@/components/Link'
import { StyledForm, StyledFormGroup } from '@/pages/Signup/style'
import { useRegisterUserMutation } from '@/store/api/authApi'
import { useNavigate } from 'react-router-dom'
import { LoaderSpinner } from '@/components/Loading'

export const SignupPage = () => {
  const navigate = useNavigate()
  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation()

  useEffect(() => {
    if (isSuccess) return navigate('/login')
  }, [isSuccess])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { first_name, second_name, phone, email, login, password } =
      event.target as typeof event.target & {
        first_name: { value: string }
        second_name: { value: string }
        phone: { value: string }
        email: { value: string }
        login: { value: string }
        password: { value: string }
      }
    registerUser({
      first_name: first_name.value,
      second_name: second_name.value,
      phone: phone.value,
      email: email.value,
      login: login.value,
      password: password.value,
    })
  }

  return (
    <Card width="580px" height="440px">
      {isLoading && <LoaderSpinner />}
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormGroup>
          <Input name="first_name" label="Имя" required={true} />
          <Input name="second_name" label="Фамилия" required={true} />
        </StyledFormGroup>
        <StyledFormGroup>
          <Input name="email" label="E-mail" required={true} />
          <Input name="phone" label="Телефон" required={true} />
        </StyledFormGroup>
        <StyledFormGroup>
          <Input name="login" label="Логин" required={true} />
          <Input
            name="password"
            label="Пароль"
            type="password"
            required={true}
          />
        </StyledFormGroup>
        <Button type="submit" $primary={true}>
          зарегистрироваться
        </Button>
        <Link to="/login">авторизация</Link>
      </StyledForm>
    </Card>
  )
}
