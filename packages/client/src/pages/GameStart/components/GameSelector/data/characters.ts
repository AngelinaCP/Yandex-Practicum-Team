import Archer from './characters/Archer.png'
import Wizard from './characters/Wizard.png'
import Swordsman from './characters/Swordsman.png'

export const characters: Record<string, GameCharacter> = {
  Idle: { title: 'Archer', thumbnail: Archer },
  Wizard: { title: 'Wizard', thumbnail: Wizard },
  Swordsman: { title: 'Swordsman', thumbnail: Swordsman },
}
