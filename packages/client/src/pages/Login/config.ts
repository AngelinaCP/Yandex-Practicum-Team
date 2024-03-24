import { object, string, TypeOf } from 'zod'
import { inputLoginZodSchema, inputPasswordZodSchema } from '@/components/Input'

export const loginSchema = object({
  login: inputLoginZodSchema,
  password: inputPasswordZodSchema,
})

export type LoginInput = TypeOf<typeof loginSchema>
export { inputLoginZodSchema, inputPasswordZodSchema }
