import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '@/store/store'

export function AuthRequired() {
  const user = useAppSelector(state => state.userState.user)
  return user?.id ? <Outlet /> : <Navigate to="/login" replace />
}
