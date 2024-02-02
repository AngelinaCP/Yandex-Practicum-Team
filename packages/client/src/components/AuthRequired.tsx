import { Navigate, Outlet } from 'react-router-dom'
import { RootState, useAppSelector } from '@/store/store'

export function AuthRequired() {
  const selectUser = (state: RootState) => state.userState.user
  const selectUserId = (state: RootState) => selectUser(state)?.id

  const userId = useAppSelector(state => selectUserId(state))

  return userId ? <Outlet /> : <Navigate to="/login" replace />
}
