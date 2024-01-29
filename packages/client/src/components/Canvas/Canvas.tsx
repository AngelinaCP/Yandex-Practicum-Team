import React, { useEffect, useRef } from 'react'
import { Game } from '@/game'
import { useNavigate } from 'react-router-dom'

export const Canvas = () => {
  const canvasRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current
    const context: CanvasRenderingContext2D | null = canvas!.getContext('2d')
    let animationFrameId: number

    if (context) {
      const game = new Game(context, 800, 400, navigate)

      game.initGame()

      const render = () => {
        game.start(context)
        animationFrameId = window.requestAnimationFrame(render)
      }

      render()
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} id="canvas" width="800" height="400" />
}
