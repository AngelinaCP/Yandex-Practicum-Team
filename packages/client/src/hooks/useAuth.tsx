import { AuthContext } from '@/context/AuthProvider'
import { useContext } from 'react'

function useAuth() {
  return useContext(AuthContext)
}

export default useAuth
