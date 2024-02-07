import React, { FC, FormEvent, useCallback, useState } from 'react'
import { InputLabelStyle, InputStyle, InputWrapperStyle } from './style'
import { ErrorMessage } from './ErrorMessage'
import z from 'zod'

interface InputProps {
  name: string
  label: string
  required?: boolean
  type?: 'text' | 'file' | 'password' | 'checkbox'
  errorMessages?: string[]
  zodValidate?: z.ZodTypeAny
}

const Input: FC<InputProps> = ({
  label,
  name,
  required = false,
  type,
  zodValidate,
  errorMessages = [],
}) => {
  const [errorMessagesInternal, setErrorMessages] =
    useState<string[]>(errorMessages)

  const zodErrors = useCallback((value: string): string[] => {
    errorMessages = []
    if (zodValidate) {
      const zodResult = zodValidate.safeParse(value)
      if (!zodResult.success) {
        const errors = zodResult.error.format()._errors
        return errors
      }
      return []
    }
    return []
  }, [])

  const handleBlur = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    setErrorMessages(zodErrors(event.currentTarget.value))
  }

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setErrorMessages(zodErrors(event.currentTarget.value))
  }

  return (
    <InputWrapperStyle>
      <InputStyle
        type={type || 'input'}
        placeholder=""
        name={name}
        id={name}
        required={required}
        onBlur={handleBlur}
        onFocus={handleBlur}
        onChange={handleChange}
      />
      <InputLabelStyle htmlFor={name}>{label}</InputLabelStyle>
      {errorMessagesInternal.length > 0 &&
        errorMessagesInternal.map((e, i) => (
          <ErrorMessage key={i}>{e}</ErrorMessage>
        ))}
    </InputWrapperStyle>
  )
}

export default Input

const requirdeString = 'Обязательное поле'

const inputCreator =
  (
    name: string,
    label: string,
    zodValidate: z.ZodTypeAny,
    type: 'text' | 'password' | 'file' = 'text'
  ): FC<Partial<InputProps>> =>
  props =>
    (
      <Input
        name={name}
        label={label}
        zodValidate={zodValidate}
        type={type}
        // errorMessages={props.errorMessages}
        {...props}
      />
    )

export const InputFirstNameZodSchema = z
  .string()
  .min(1, requirdeString)
  .max(100)

export const InputFirstName = inputCreator(
  'first_name',
  'Имя',
  InputFirstNameZodSchema
)

export const InputSecondNameZodSchema = z
  .string()
  .min(1, requirdeString)
  .max(100)
export const InputSecondName = inputCreator(
  'second_name',
  'Фамилия',
  InputSecondNameZodSchema
)

export const InputEmailZodSchema = z
  .string()
  .min(1, requirdeString)
  .email('Формат e-mail: <name>@<domain>.<zone>')
export const InputEmail = inputCreator('email', 'E-mail', InputEmailZodSchema)

export const InputPhoneZodSchema = z
  .string()
  .min(1, requirdeString)
  .regex(/^\+?\d{11,}/, 'Формат телефона: только цифры')
export const InputPhone = inputCreator('phone', 'Телефон', InputPhoneZodSchema)

export const InputPasswordZodSchema = z
  .string()
  .min(1, requirdeString)
  .min(8, 'Пароль должен быть больше 8 символов')
  .max(32, 'Пароль должен быть не больше 32 символов')
export const InputPassword = inputCreator(
  'password',
  'Пароль',
  InputPasswordZodSchema,
  'password'
)

export const InputPasswordConfirmZodSchema = z
  .string()
  .min(1, 'Пароли не совпадают')
export const InputPasswordConfirm = inputCreator(
  'passwordConfirm',
  'Подтверждение пароля',
  InputPasswordConfirmZodSchema,
  'password'
)

export const InputLoginZodSchema = z.string().min(1, requirdeString)
export const InputLogin = inputCreator('login', 'Логин', InputLoginZodSchema)
