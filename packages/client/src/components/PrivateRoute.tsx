import useAuth from '@/hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoute() {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}
