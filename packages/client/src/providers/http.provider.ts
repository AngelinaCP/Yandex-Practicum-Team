import axios, { AxiosError } from 'axios'
import globalRouter from '@/global-router'

export const http = axios.create({
  withCredentials: true,
})

http.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  return config
})

http.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response?.status === 401 && globalRouter.navigate) {
      globalRouter.navigate('/login')
    }

    return Promise.reject(error)
  }
)
