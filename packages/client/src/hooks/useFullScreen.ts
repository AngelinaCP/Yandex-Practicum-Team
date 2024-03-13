import { MutableRefObject, useCallback, useEffect, useRef } from 'react'

export const useFullScreen = (
  element: MutableRefObject<HTMLElement | HTMLCanvasElement | null>,
  keys: string[]
) => {
  const combination = useRef(new Set<string>())

  const toggleFullScreen = useCallback(() => {
    const isFullscreen = document.fullscreenElement
    if (!isFullscreen) {
      element.current?.requestFullscreen()
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }, [element])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (keys.includes(e.key)) {
        combination.current = combination.current.add(e.key)
        if (
          combination.current.size === keys.length &&
          Array.from(combination.current.values()).every(x => keys.includes(x))
        ) {
          toggleFullScreen()
        }
      }
    },
    [toggleFullScreen, keys]
  )

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (combination.current.has(e.key)) {
      combination.current.delete(e.key)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)
    return () => document.removeEventListener('keydown', handleKeyDown, false)
  }, [handleKeyDown])

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, false)
    return () => document.removeEventListener('keyup', handleKeyUp, false)
  }, [handleKeyUp])

  return toggleFullScreen
}
