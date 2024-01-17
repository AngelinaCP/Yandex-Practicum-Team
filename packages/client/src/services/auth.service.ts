import axios from 'axios'
import environment from '@/options/environment'

export class AuthService {
  public login(loginData: { login: string; password: string }) {
    return axios.post(`${environment.yaApi}/api/v2/auth/signin`, loginData)
  }
}
