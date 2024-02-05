import { wizard } from './players/wizard'
import { archer } from './players/archer'
import { swordsman } from './players/swordsman'
export { Player } from './Player'

export const players: Record<string, GamePlayerSkin> = {
  wizard,
  archer,
  swordsman,
}
