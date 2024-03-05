import React, { useEffect, createContext, useState } from 'react'
import { useSaveThemeMutation } from '@/store/api/themeApi'

type ThemeContextType = {
  theme: string
  setTheme: (theme: string) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark-theme',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
})

const getTheme = () => {
  const theme = localStorage.getItem('theme')
  if (!theme) {
    localStorage.setItem('theme', 'dark-theme')
    return 'dark-theme'
  } else {
    return theme
  }
}

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState(getTheme)
  const [saveTheme] = useSaveThemeMutation()

  function toggleTheme() {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    } else {
      setTheme('dark-theme')
    }
  }

  useEffect(() => {
    saveTheme(theme)
    const refreshTheme = () => {
      localStorage.setItem('theme', theme)
    }

    refreshTheme()
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
