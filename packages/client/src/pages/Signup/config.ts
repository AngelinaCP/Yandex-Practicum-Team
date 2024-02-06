import { object, string, TypeOf } from 'zod'

const requierdString = 'Обязательное поле'

export const registerSchema = object({
  first_name: string().min(1, requierdString).max(100),
  second_name: string().min(1, requierdString).max(100),
  email: string()
    .min(1, requierdString)
    .email('Формат e-mail: <name>@<domain>.<zone>'),
  phone: string()
    .min(1, requierdString)
    .regex(/^\+?\d{11,}/, 'Формат телефона: плюс и только цифры'),
  login: string().min(1, requierdString),
  password: string()
    .min(1, requierdString)
    .min(8, 'Пароль должен быть больше 8 символов')
    .max(32, 'Пароль должен быть не больше 32 символов'),
  passwordConfirm: string().min(1, 'Пароли не совпадают'),
}).refine(data => data.password === data.passwordConfirm, {
  message: 'Пароли не совпадают',
  path: ['passwordConfirm'],
})

export type RegisterInput = TypeOf<typeof registerSchema>
