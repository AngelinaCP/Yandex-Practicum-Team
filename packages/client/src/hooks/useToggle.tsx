import { useState } from 'react'

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggleValue = () => setValue(val => !val)

  return [value, toggleValue]
}
