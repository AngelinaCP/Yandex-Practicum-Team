import React, { useEffect, useRef } from 'react'
import { Game } from '@/game'
import { useNavigate } from 'react-router-dom'
import { playerSelector, backgroundSelector, setScore } from '@/game/gameSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { useFullScreen } from '@/hooks/useFullScreen'
import {
  FullScreenEnterButton,
  FullScreenEnterButtonWrapper,
} from '@/components/FullScreenButton/style'

export const Canvas = () => {
  const canvasRef = useRef(null)
  const navigate = useNavigate()
  const player = useAppSelector(playerSelector)
  const background = useAppSelector(backgroundSelector)
  const dispatch = useAppDispatch()
  const toggleFullScreen = useFullScreen(canvasRef, ['Alt', 'Enter'])

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current
    const context: CanvasRenderingContext2D | null = canvas!.getContext('2d')
    let animationFrameId: number

    if (context) {
      const game = new Game(context, 800, 400, player, background)

      game.initGame()

      const render = (deltaTime: number) => {
        game.start(context, deltaTime)
        animationFrameId = window.requestAnimationFrame(render)

        if (game.gameEnd) {
          setTimeout(() => {
            game.cleanGame()
            navigate('/game-end')
          }, 2000)
          dispatch(setScore(game.score))
          window.cancelAnimationFrame(animationFrameId)
        }
      }

      render(0)
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} id="canvas" width="800" height="400" />
      <FullScreenEnterButtonWrapper>
        <FullScreenEnterButton
          onClick={toggleFullScreen}
          about="Переключить полноэкранный режим"
        />
      </FullScreenEnterButtonWrapper>
    </>
  )
}
