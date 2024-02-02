import { object, string, TypeOf } from 'zod'

const registerSchema = object({
  first_name: string().min(1, 'Full name is required').max(100),
  second_name: string().min(1, 'Full name is required').max(100),
  email: string()
    .min(1, 'Email address is required')
    .email('Email Address is invalid'),
  phone: string().min(1, 'Phone number is required'),
  login: string().min(1, 'Login is required'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

export type RegisterInput = TypeOf<typeof registerSchema>
