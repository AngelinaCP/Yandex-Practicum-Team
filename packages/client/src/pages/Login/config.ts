import { object, string, TypeOf } from 'zod'

const loginSchema = object({
  login: string()
    .min(1, 'login is required')
    .min(8, 'login must be more than 8 characters')
    .max(32, 'login must be less than 32 characters'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

export type LoginInput = TypeOf<typeof loginSchema>
