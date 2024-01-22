import { createContext, useState } from 'react'
import { LocalStorageService } from '@/services/localStorage.service'

type AuthContextType = {
  isAuthenticated: boolean
  setAuth: (auth: boolean) => void
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuth: () => {},
})

export function AuthProvider({ children }: { children: JSX.Element }) {
  const storage = new LocalStorageService()

  const [isAuthenticated, setAuth] = useState<boolean>(
    Boolean(storage.getItem('isAuth'))
  )

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
