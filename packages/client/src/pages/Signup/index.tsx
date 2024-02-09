import React, { useEffect } from 'react'
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
import { useFormValidate } from '@/hooks/useFormValid'
import { z } from 'zod'

type InputValuesType = z.infer<typeof registerSchema>
type InputsTypeModifier<T> = {
  [key in keyof InputValuesType]: T
}
type FormType = HTMLFormElement & {
  elements: InputsTypeModifier<HTMLInputElement>
}

export const SignupPage = () => {
  const navigate = useNavigate()
  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation()
  const [errors, validateForm] = useFormValidate(registerSchema)

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

    const isFormValid = validateForm(values)
    if (isFormValid) {
      console.log('register')
      registerUser(values)
    } else {
      console.warn('not register')
    }
  }

  return (
    <Card width="580px" height="auto">
      {isLoading && <LoaderSpinner />}
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormGroup>
          <InputFirstName errorMessages={errors.first_name ?? []} />
          <InputSecondName errorMessages={errors.second_name ?? []} />
          <InputEmail errorMessages={errors.email ?? []} />
          <InputPhone errorMessages={errors.phone ?? []} />
          <InputPassword errorMessages={errors.password ?? []} />
          <InputPasswordConfirm errorMessages={errors.passwordConfirm ?? []} />
          <InputLogin errorMessages={errors.login ?? []} />
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
