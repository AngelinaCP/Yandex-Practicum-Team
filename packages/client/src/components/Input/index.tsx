import React, {
  FC,
  useCallback,
  useState,
  useMemo,
  useEffect,
  ChangeEventHandler,
  ChangeEvent,
} from 'react'
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
  value?: string
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

let firstRender = true

const Input: FC<InputProps> = ({
  label,
  name,
  required = false,
  type = 'text',
  zodValidate,
  errorMessages = [],
  value = '',
  disabled = false,
  onChange,
}) => {
  const [valueInternal, setValue] = useState(value)
  const [focusState, setFocusState] = useState('default')

  const getInputErrors = useCallback((): string[] => {
    errorMessages = []
    if (zodValidate) {
      const zodResult = zodValidate.safeParse(valueInternal)
      if (!zodResult.success) {
        const errors = zodResult.error.format()._errors
        return errors
      }
      return []
    }
    return []
  }, [valueInternal])

  const errors = useMemo(() => {
    const join = firstRender ? [] : getInputErrors()
    for (let i = 0; i < errorMessages.length; i++) {
      if (!join.includes(errorMessages[i])) join.push(errorMessages[i])
    }
    return join
  }, [errorMessages, valueInternal, focusState])

  useEffect(() => {
    firstRender = false
    return () => {
      firstRender = true
    }
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event)
    setValue(event.currentTarget.value)
  }

  const handleBlur = () => {
    setFocusState('blur')
  }

  const handleFocus = () => {
    setFocusState('focus')
  }

  return (
    <InputWrapperStyle>
      <InputStyle
        type={type || 'text'}
        placeholder=""
        name={name}
        id={name}
        required={required}
        disabled={disabled}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        value={valueInternal}
      />
      <InputLabelStyle htmlFor={name}>{label}</InputLabelStyle>
      {errors.length > 0 &&
        errors.map((e, i) => <ErrorMessage key={i}>{e}</ErrorMessage>)}
    </InputWrapperStyle>
  )
}

export default Input

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
        {...props}
      />
    )

const requirdeString = 'Обязательное поле'
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
  .regex(/^\+?\d{11,}$/, 'Формат телефона: только цифры (11)')
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
