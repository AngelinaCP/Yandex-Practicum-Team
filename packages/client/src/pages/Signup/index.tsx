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

interface RegisterFormFields<T> {
  first_name: T
  second_name: T
  phone: T
  email: T
  login: T
  password: T
  passwordConfirm: T
}

interface RegisterInputs
  extends HTMLFormControlsCollection,
    RegisterFormFields<HTMLInputElement> {}

interface RegisterForm extends HTMLFormElement {
  readonly elements: RegisterInputs
}

const registerFormValidator = formValidator<RegisterInput>(registerSchema)

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
    passwordConfirm: [],
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
      first_name: form.elements.first_name.value,
      second_name: form.elements.second_name.value,
      phone: form.elements.phone.value,
      email: form.elements.email.value,
      login: form.elements.login.value,
      password: form.elements.password.value,
      passwordConfirm: form.elements.passwordConfirm.value,
    }

    const [isValid, inputErrors] = registerFormValidator(registerData)

    if (isValid && Object.keys(inputErrors).length < 1) {
      console.log('register')
      setErrorMessages({})
      registerUser(registerData)
    } else {
      console.log('not register')
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
          <Input
            name="password"
            label="Пароль"
            type="password"
            required={true}
            errorMessages={errorMessages.password}
          />
          <Input
            name="passwordConfirm"
            label="Подтверждение пароля"
            type="password"
            required={true}
            errorMessages={errorMessages.passwordConfirm}
          />
          <Input
            name="login"
            label="Логин"
            required={true}
            errorMessages={errorMessages.login}
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
