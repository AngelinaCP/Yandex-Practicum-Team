import axios from 'axios'

export const http = axios.create({
  withCredentials: true,
})

http.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  return config
})
