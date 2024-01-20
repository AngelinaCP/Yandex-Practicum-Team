import React, { useEffect, useRef } from 'react'
import { Game } from '@/game'

export const Canvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current
    const context: CanvasRenderingContext2D | null = canvas!.getContext('2d')
    let animationFrameId: number

    if (context) {
      const game = new Game(context)

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

  return <canvas ref={canvasRef} id="canvas" width="600" height="600" />
}
