import React, {
  FC,
  useState,
  useMemo,
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
  zodValidate?: z.ZodTypeAny | null
  value?: string
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<InputProps> = ({
  label,
  name,
  required = false,
  type = 'text',
  zodValidate = null,
  errorMessages = [],
  value = '',
  disabled = false,
  onChange,
}) => {
  const [valueInternal, setValue] = useState(value)
  const [focusState, setFocusState] = useState<'default' | 'focus' | 'blur'>(
    'default'
  )

  const errors = useMemo((): string[] => {
    let errorsInternal: string[] = []
    if (zodValidate && focusState !== 'default') {
      const zodResult = zodValidate.safeParse(valueInternal)
      if (!zodResult.success) {
        return (errorsInternal = zodResult.error.format()._errors)
      } else return []
    } else {
      return errorMessages
    }
  }, [valueInternal, focusState, errorMessages])

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
    zodValidate: z.ZodTypeAny | null = null,
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
export const inputFirstNameZodSchema = z
  .string()
  .min(1, requirdeString)
  .max(100)

export const InputFirstName = inputCreator(
  'first_name',
  'Имя',
  inputFirstNameZodSchema
)

export const inputSecondNameZodSchema = z
  .string()
  .min(1, requirdeString)
  .max(100)
export const InputSecondName = inputCreator(
  'second_name',
  'Фамилия',
  inputSecondNameZodSchema
)

export const inputEmailZodSchema = z
  .string()
  .min(1, requirdeString)
  .email('Формат e-mail: <name>@<domain>.<zone>')
export const InputEmail = inputCreator('email', 'E-mail', inputEmailZodSchema)

export const inputPhoneZodSchema = z
  .string()
  .min(1, requirdeString)
  .regex(/^\+?\d{11,}$/, 'Формат телефона: только цифры (11)')
export const InputPhone = inputCreator('phone', 'Телефон', inputPhoneZodSchema)

export const inputPasswordZodSchema = z
  .string()
  .min(1, requirdeString)
  .min(8, 'Пароль должен быть больше 8 символов')
  .max(32, 'Пароль должен быть не больше 32 символов')
export const InputPassword = inputCreator(
  'password',
  'Пароль',
  inputPasswordZodSchema,
  'password'
)

export const inputPasswordConfirmZodSchema = z
  .string()
  .min(1, 'Пароли не совпадают')
export const InputPasswordConfirm = inputCreator(
  'passwordConfirm',
  'Подтверждение пароля',
  null,
  'password'
)

export const inputLoginZodSchema = z.string().min(1, requirdeString)
export const InputLogin = inputCreator('login', 'Логин', inputLoginZodSchema)
