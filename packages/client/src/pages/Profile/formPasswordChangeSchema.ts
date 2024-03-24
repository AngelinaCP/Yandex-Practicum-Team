import { inputPasswordZodSchema } from '@/components/Input'
import { z } from 'zod'

export const passwordChangeSchema = z.object({
  password: inputPasswordZodSchema,
  passwordNew: inputPasswordZodSchema,
})

export type PasswordChange = z.TypeOf<typeof passwordChangeSchema>

export { inputPasswordZodSchema }
