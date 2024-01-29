import environment from '@/options/environment'
import { http } from '@/providers'

export class AuthService {
  public login(loginData: { login: string; password: string }) {
    return http.post(`${environment.yaApi}/api/v2/auth/signin`, loginData)
  }

  public getUser() {
    return http.get(`${environment.yaApi}/api/v2/auth/user`, {
      withCredentials: true,
    })
  }
}
