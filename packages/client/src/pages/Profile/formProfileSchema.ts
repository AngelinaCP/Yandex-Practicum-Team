import { object, TypeOf, string } from 'zod'
import {
  InputFirstNameZodSchema,
  InputSecondNameZodSchema,
  InputEmailZodSchema,
  InputPhoneZodSchema,
  InputLoginZodSchema,
  InputPasswordZodSchema,
  InputPasswordConfirmZodSchema,
} from '@/components/Input'

export const profileSchema = object({
  first_name: InputFirstNameZodSchema,
  second_name: InputSecondNameZodSchema,
  email: InputEmailZodSchema,
  phone: InputPhoneZodSchema,
  login: InputLoginZodSchema,
  display_name: string().min(8, 'Псевдоним более 8 символов'),
})

export type RegisterInput = TypeOf<typeof profileSchema>
