import { object, TypeOf, string } from 'zod'
import {
  inputFirstNameZodSchema,
  inputSecondNameZodSchema,
  inputEmailZodSchema,
  inputPhoneZodSchema,
  inputLoginZodSchema,
} from '@/components/Input'

const inputDisplayNameZodSchema = string().min(8, 'Псевдоним более 8 символов')

export const profileSchema = object({
  first_name: inputFirstNameZodSchema,
  second_name: inputSecondNameZodSchema,
  email: inputEmailZodSchema,
  phone: inputPhoneZodSchema,
  login: inputLoginZodSchema,
  display_name: inputDisplayNameZodSchema,
})

export type RegisterInput = TypeOf<typeof profileSchema>

export const profileInputSchemas = {
  first_name: inputFirstNameZodSchema,
  second_name: inputSecondNameZodSchema,
  email: inputEmailZodSchema,
  phone: inputPhoneZodSchema,
  login: inputLoginZodSchema,
  display_name: inputDisplayNameZodSchema,
}
