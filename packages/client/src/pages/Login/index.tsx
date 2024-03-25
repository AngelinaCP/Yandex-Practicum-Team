import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button/index'
import Link from '@/components/Link'
import { LoaderSpinner } from '@/components/Loading'
import { StyledForm } from '@/pages/Login/style'
import {
  useLoginUserMutation,
  useOAuthCodeMutation,
  useOAuthMutation,
} from '@/store/api/authApi'
import { errorMessage } from '@/store/api/types'
import { getYandexUrl } from '@/services/OAuth'
import ButtonLink from '@/components/ButtonLink'
import {
  loginSchema,
  inputLoginZodSchema,
  inputPasswordZodSchema,
} from './config'
import { useFormValidate } from '@/hooks/useFormValid'

export const LoginPage: FC = () => {
  const navigate = useNavigate()
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation()
  const [service_id, { data }] = useOAuthCodeMutation()
  const [
    oAuth,
    { isSuccess: oAuthSuccess, isError: oAuthError, error: oAuthError_ },
  ] = useOAuthMutation()

  const uri = window.location.href.split('?')[0]
  const code = window.location.search.split('code=')[1]
  const loginError = error || oAuthError_
  const [errors, validateForm] = useFormValidate(loginSchema)

  useEffect(() => {
    if (!data) service_id({ redirect_uri: uri })
    if (code) oAuth({ code: code, redirect_uri: uri })
  }, [data, code])

  useEffect(() => {
    if (oAuthSuccess || isSuccess) return navigate('/')
    if (
      (isError || oAuthError) &&
      [
        (loginError as errorMessage)?.data?.reason,
        (loginError as errorMessage)?.error?.data?.reason,
      ].includes('User already in system')
    )
      return navigate('/')
  }, [isSuccess, oAuthSuccess, oAuthError, isError])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { login, password } = event.target as typeof event.target & {
      login: { value: string }
      password: { value: string }
    }
    const isFormValid = validateForm({
      login: login.value,
      password: password.value,
    })
    if (isFormValid) loginUser({ login: login.value, password: password.value })
  }

  return (
    <Card width="300px" height="auto">
      {isLoading && <LoaderSpinner />}
      <StyledForm onSubmit={handleSubmit}>
        <Input
          label="Логин"
          name="login"
          required={true}
          zodValidate={inputLoginZodSchema}
          errorMessages={errors.login ?? []}
        />
        <Input
          label="Пароль"
          name="password"
          type="password"
          required={true}
          zodValidate={inputPasswordZodSchema}
          errorMessages={errors.password ?? []}
        />
        <Button type="submit" $primary={true}>
          войти
        </Button>
        <ButtonLink
          to={data ? getYandexUrl(data.service_id, uri) : '/'}
          disabled={!data}>
          Войти через яндекс
        </ButtonLink>
        <Link to="/signup">регистрация</Link>
      </StyledForm>
    </Card>
  )
}
