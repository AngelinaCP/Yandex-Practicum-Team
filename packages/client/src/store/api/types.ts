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
  old_password: string
  new_password: string
}

export type TChangeAvatarRequest = File

export type formValues = { [k: string]: FormDataEntryValue }

export type errorMessage = {
  error?: {
    data?: {
      reason?: string
    }
  }
  data?: {
    reason?: string
  }
}
