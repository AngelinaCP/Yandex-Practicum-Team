import { createContext, useState } from 'react'
import { storage } from '@/providers'

type AuthContextType = {
  isAuthenticated: boolean
  setAuth: (auth: boolean) => void
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: Boolean(storage.getItem('user')),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuth: () => {},
})

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [isAuthenticated, setAuth] = useState<boolean>(
    Boolean(storage.getItem('user'))
  )

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
