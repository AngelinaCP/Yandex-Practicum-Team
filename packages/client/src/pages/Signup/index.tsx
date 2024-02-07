import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
import {
  InputEmail,
  InputFirstName,
  InputLogin,
  InputPassword,
  InputPasswordConfirm,
  InputPhone,
  InputSecondName,
} from '@/components/Input'
import Button from '@/components/Button'
import Link from '@/components/Link'
import { StyledForm, StyledFormGroup } from '@/pages/Signup/style'
import { useRegisterUserMutation } from '@/store/api/authApi'
import { useNavigate } from 'react-router-dom'
import { LoaderSpinner } from '@/components/Loading'
import { registerSchema } from './config'
import { formValidator } from '@/helpers/formValidator'
import { z } from 'zod'

type InputValuesType = z.infer<typeof registerSchema>
type InputsTypeModifier<T> = {
  [key in keyof InputValuesType]: T
}
type InputsErrorsType = Partial<InputsTypeModifier<string[]>>
type FormType = HTMLFormElement & {
  elements: InputsTypeModifier<HTMLInputElement>
}

const registerFormValidator = formValidator(registerSchema)

export const SignupPage = () => {
  const navigate = useNavigate()
  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation()
  const [errorMessages, setErrorMessages] = useState<InputsErrorsType>({
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

  const handleSubmit = (event: React.FormEvent<FormType>) => {
    event.preventDefault()

    const form = event.currentTarget
    const values = Object.fromEntries(
      [...form.elements].map(e =>
        isInput(e) ? [e.name, e.value] : [null, null]
      )
    )

    const { success, errors } = registerFormValidator(values)

    if (success && Object.keys(errors).length < 1) {
      console.log('register')
      registerUser(values)
    } else {
      console.log('not register')
      setErrorMessages(errors)
    }
  }

  return (
    <Card width="580px" height="auto">
      {isLoading && <LoaderSpinner />}
      <StyledForm onSubmitCapture={handleSubmit}>
        <StyledFormGroup>
          <InputFirstName errorMessages={errorMessages.first_name ?? []} />
          <InputSecondName errorMessages={errorMessages.second_name ?? []} />
          <InputEmail errorMessages={errorMessages.email ?? []} />
          <InputPhone errorMessages={errorMessages.phone ?? []} />
          <InputPassword errorMessages={errorMessages.password ?? []} />
          <InputPasswordConfirm
            errorMessages={errorMessages.passwordConfirm ?? []}
          />
          <InputLogin errorMessages={errorMessages.login ?? []} />
        </StyledFormGroup>
        <Button type="submit" $primary={true}>
          зарегистрироваться
        </Button>
        <Link to="/login">авторизация</Link>
      </StyledForm>
    </Card>
  )
}

function isInput(e: Element): e is HTMLInputElement {
  return e.tagName === 'INPUT'
}
