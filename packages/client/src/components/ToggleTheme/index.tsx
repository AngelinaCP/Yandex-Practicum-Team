import { StyledToggleWrapper } from '@/components/ToggleTheme/style'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeProvider'

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <StyledToggleWrapper>
      <img src="images/moon.png" width="32" alt="dark mode" />
      <ThemeSwitcher
        defaultChecked={theme === 'light-theme'}
        onClick={toggleTheme}
      />
      <img src="images/sun.png" width="32" alt="light mode" />
    </StyledToggleWrapper>
  )
}
