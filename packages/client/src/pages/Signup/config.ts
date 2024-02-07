import { object, TypeOf } from 'zod'
import {
  InputFirstNameZodSchema,
  InputSecondNameZodSchema,
  InputEmailZodSchema,
  InputPhoneZodSchema,
  InputLoginZodSchema,
  InputPasswordZodSchema,
  InputPasswordConfirmZodSchema,
} from '@/components/Input'

export const registerSchema = object({
  first_name: InputFirstNameZodSchema,
  second_name: InputSecondNameZodSchema,
  email: InputEmailZodSchema,
  phone: InputPhoneZodSchema,
  login: InputLoginZodSchema,
  password: InputPasswordZodSchema,
  passwordConfirm: InputPasswordConfirmZodSchema,
}).refine(data => data.password === data.passwordConfirm, {
  message: 'Пароли не совпадают',
  path: ['passwordConfirm'],
})

export type RegisterInput = TypeOf<typeof registerSchema>
