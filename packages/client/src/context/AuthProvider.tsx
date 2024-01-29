import { createContext, useState } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  setAuth: (auth: boolean) => void
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuth: () => {},
})

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [isAuthenticated, setAuth] = useState<boolean>(true)

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
