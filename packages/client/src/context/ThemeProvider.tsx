import React, { useEffect, createContext, useState } from 'react'
import { useSaveThemeMutation } from '@/store/api/themeApi'
import { ThemeProvider } from 'styled-components'
import { ThemeEnum } from '@/enums'
import { themes } from '@/themes'

type ThemeContextType = {
  theme: string
  setTheme: (theme: ThemeEnum) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeEnum.darkTheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
})

const getTheme = (): ThemeEnum => {
  const theme = localStorage.getItem('theme') as ThemeEnum
  if (!theme) {
    localStorage.setItem('theme', ThemeEnum.darkTheme)
    return ThemeEnum.darkTheme
  } else {
    return theme
  }
}

const ThemeContextProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState(getTheme)
  const [saveTheme] = useSaveThemeMutation()
  const [domLoaded, setDomLoaded] = useState(false)

  function toggleTheme() {
    if (theme === ThemeEnum.darkTheme) {
      setTheme(ThemeEnum.lightTheme)
    } else {
      setTheme(ThemeEnum.darkTheme)
    }
  }

  useEffect(() => {
    setDomLoaded(true)
    saveTheme(theme)
    const refreshTheme = () => {
      localStorage.setItem('theme', theme)
    }

    refreshTheme()
  }, [theme])

  return (
    <>
      {domLoaded && (
        <ThemeProvider theme={findTheme(theme).colors}>
          <ThemeContext.Provider
            value={{
              theme,
              setTheme,
              toggleTheme,
            }}>
            {children}
          </ThemeContext.Provider>
        </ThemeProvider>
      )}
    </>
  )
}

export { ThemeContext, ThemeContextProvider }

function findTheme(themeName = 'dark-theme') {
  const theme = themes.find(theme => theme.name === themeName)

  if (theme) {
    return theme
  }

  return themes[0]
}
