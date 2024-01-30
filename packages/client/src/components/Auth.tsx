import globalRouter from '@/global-router'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { authService } from '@/services'
import useAuth from '@/hooks/useAuth'
import { storage } from '@/providers'

export function Auth() {
  const { setAuth } = useAuth()
  globalRouter.navigate = useNavigate()
  useEffect(() => {
    authService
      .getUser()
      .then(resp => {
        storage.setItem('user', resp.data)
        setAuth(true)
      })
      .catch(() => setAuth(false))
  }, [])

  return <></>
}
