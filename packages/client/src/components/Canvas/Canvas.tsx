import React, { useEffect, useRef } from 'react'
import { Game } from '@/game'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/store'
import {
  playerSelector,
  backgroundSelector,
  gameSlice,
  setScore,
} from '@/game/gameSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Canvas = () => {
  const canvasRef = useRef(null)
  const navigate = useNavigate()
  const player = useSelector(playerSelector)
  const background = useSelector(backgroundSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current
    const context: CanvasRenderingContext2D | null = canvas!.getContext('2d')
    let animationFrameId: number

    if (context) {
      const game = new Game(context, 800, 400, player, background)

      game.initGame()

      const render = () => {
        game.start(context)
        animationFrameId = window.requestAnimationFrame(render)

        if (game.gameEnd) {
          setTimeout(() => {
            navigate('/game-end')
          }, 2000)
          dispatch(setScore(game.score))
          window.cancelAnimationFrame(animationFrameId)
        }
      }

      render()
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} id="canvas" width="800" height="400" />
}
