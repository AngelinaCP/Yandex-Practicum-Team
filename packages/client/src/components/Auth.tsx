import globalRouter from '@/global-router'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { authService } from '@/services'
import useAuth from '@/hooks/useAuth'

export function Auth() {
  const { setAuth } = useAuth()
  globalRouter.navigate = useNavigate()
  useEffect(() => {
    authService
      .getUser()
      .then(() => setAuth(true))
      .catch(() => setAuth(false))
  }, [])

  return <></>
}
