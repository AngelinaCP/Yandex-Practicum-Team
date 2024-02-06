import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Link from '@/components/Link'
import { StyledForm, StyledFormGroup } from '@/pages/Signup/style'
import { useRegisterUserMutation } from '@/store/api/authApi'
import { useNavigate } from 'react-router-dom'
import { LoaderSpinner } from '@/components/Loading'
import { RegisterInput, registerSchema } from './config'
import { formValidator } from '@/helpers/formValidator'

interface RegisterInputs extends HTMLFormControlsCollection {
  first_name: HTMLInputElement
  second_name: HTMLInputElement
  phone: HTMLInputElement
  email: HTMLInputElement
  login: HTMLInputElement
  password: HTMLInputElement
}

interface RegisterForm extends HTMLFormElement {
  readonly elements: RegisterInputs
}

const registerFormValidator = formValidator(registerSchema)

export const SignupPage = () => {
  const navigate = useNavigate()
  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation()
  const [errorMessages, setErrorMessages] = useState<{
    [key in keyof RegisterInput]?: string[]
  }>({
    email: [],
    first_name: [],
    login: [],
    password: [],
    phone: [],
    second_name: [],
  })

  useEffect(() => {
    if (isSuccess) return navigate('/login')
  }, [isSuccess])

  const handleSubmit = (event: React.FormEvent<RegisterForm>) => {
    event.preventDefault()

    const form = event.currentTarget

    const registerData = {
      first_name: form.first_name.value,
      second_name: form.second_name.value,
      phone: form.phone.value,
      email: form.email.value,
      login: form.login.value,
      password: form.password.value,
    }

    const [isValid, inputErrors] = registerFormValidator(registerData)

    if (isValid && Object.keys(inputErrors).length < 1) {
      setErrorMessages({})
      registerUser(registerData)
    } else {
      setErrorMessages(inputErrors)
    }
  }

  return (
    <Card width="580px" height="auto">
      {isLoading && <LoaderSpinner />}
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormGroup>
          <Input
            name="first_name"
            label="Имя"
            required={true}
            errorMessages={errorMessages.first_name}
          />
          <Input
            name="second_name"
            label="Фамилия"
            required={true}
            errorMessages={errorMessages.second_name}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <Input
            name="email"
            label="E-mail"
            required={true}
            errorMessages={errorMessages.email}
          />
          <Input
            name="phone"
            label="Телефон"
            required={true}
            errorMessages={errorMessages.phone}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <Input
            name="login"
            label="Логин"
            required={true}
            errorMessages={errorMessages.login}
          />
          <Input
            name="password"
            label="Пароль"
            type="password"
            required={true}
            errorMessages={errorMessages.password}
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
