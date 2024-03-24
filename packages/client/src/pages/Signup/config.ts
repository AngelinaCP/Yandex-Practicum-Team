import { object, TypeOf } from 'zod'
import {
  inputFirstNameZodSchema,
  inputSecondNameZodSchema,
  inputEmailZodSchema,
  inputPhoneZodSchema,
  inputLoginZodSchema,
  inputPasswordZodSchema,
  inputPasswordConfirmZodSchema,
} from '@/components/Input'

export const registerSchema = object({
  first_name: inputFirstNameZodSchema,
  second_name: inputSecondNameZodSchema,
  email: inputEmailZodSchema,
  phone: inputPhoneZodSchema,
  login: inputLoginZodSchema,
  password: inputPasswordZodSchema,
  passwordConfirm: inputPasswordConfirmZodSchema,
}).refine(data => data.password === data.passwordConfirm, {
  message: 'Пароли не совпадают',
  path: ['passwordConfirm'],
})

export type RegisterInput = TypeOf<typeof registerSchema>
