import { StyledToggleWrapper } from '@/components/ToggleTheme/style'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeProvider'

export const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <StyledToggleWrapper>
      <img src="src/assets/images/moon.png" width="32" alt="dark mode" />
      <ThemeSwitcher onClick={() => toggleTheme()} />
      <img src="src/assets/images/sun.png" width="32" alt="light mode" />
    </StyledToggleWrapper>
  )
}
