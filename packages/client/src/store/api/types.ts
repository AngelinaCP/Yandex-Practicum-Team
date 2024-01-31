export interface GenericResponse {
  id: string | number
}

export interface IUser {
  id: number
  first_name: string
  second_name: string
  display_name: string
  phone: string
  login: string
  avatar: string
  email: string
}

export interface ILogin {
  login: string
  password: string
}

export interface IChangePasswordRequest {
  oldPassword: string
  newPassword: string
}
