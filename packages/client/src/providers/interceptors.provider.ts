import axios, { AxiosError } from 'axios'
import { LocalStorageService } from '@/services/localStorage.service'

export default () => {
  axios.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json'
    return config
  })

  axios.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        const origin = window.location.origin
        const storage = new LocalStorageService()
        storage.removeItem('isAuth')
        window.location.assign(`${origin}/game`)
      }
    }
  )
}
