import React from 'react'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Link from '@/components/Link'
import { StyledForm, StyledFormGroup } from '@/pages/Signup/style'

const SignUp = () => {
  return (
    <Card width={'580px'} height={'440px'}>
      <StyledForm>
        <StyledFormGroup>
          <Input name={'first_name'} label={'Имя'} required={true} />
          <Input name={'second_name'} label={'Фамилия'} required={true} />
        </StyledFormGroup>
        <StyledFormGroup>
          <Input name={'email'} label={'E-mail'} required={true} />
          <Input name={'phone'} label={'Телефон'} required={true} />
        </StyledFormGroup>
        <StyledFormGroup>
          <Input name={'login'} label={'Логин'} required={true} />
          <Input
            name={'password'}
            label={'Пароль'}
            type={'password'}
            required={true}
          />
        </StyledFormGroup>
        <Button type="submit" $primary={true}>
          зарегистрироваться
        </Button>
        <Link to={'/login'}>авторизация</Link>
      </StyledForm>
    </Card>
  )
}

export default SignUp
