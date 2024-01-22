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
    navigate('/')
  }

  return (
    <Card width={'300px'} height={'340px'}>
      <StyledForm onSubmit={handleSubmit}>
        <Input label={'Логин'} name={'login'} required={true} />
        <Input
          label={'Пароль'}
          name={'password'}
          type={'password'}
          required={true}
        />
        <Button type={'submit'} $primary={true}>
          войти
        </Button>
        <Link to={'/signup'}> регистрация </Link>
      </StyledForm>
    </Card>
  )
}

export default LogIn
