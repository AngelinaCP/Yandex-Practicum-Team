import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button/index'
import Link from '@/components/Link'
import { StyledForm } from '@/pages/Login/style'

const LogIn = () => {
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO:

    console.log(
      'login: ', // @ts-ignore
      event.currentTarget[0].value,
      '     password: ', // @ts-ignore
      event.currentTarget[1].value
    )
    navigate('/')
  }

  return (
    <Card height={'400px'} width={'400px'}>
      <StyledForm onSubmit={handleSubmit}>
        <Input name={'Логин'} required={true} />
        <Input type={'password'} name={'Пароль'} required={true} />
        <Button type={'submit'} $primary={true}>
          войти
        </Button>
        <Link to={'/signup'}> регистрация </Link>
      </StyledForm>
    </Card>
  )
}

export default LogIn
