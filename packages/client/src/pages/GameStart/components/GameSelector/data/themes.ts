import country from './themes/country.png'
import forest from './themes/forest.png'
import grunge from './themes/grunge.png'
import industrial from './themes/industrial.png'

export const themes: Record<string, GameTheme> = {
  country: { title: 'Country', thumbnail: country },
  forest: { title: 'Forest', thumbnail: forest },
  grunge: { title: 'Grunge', thumbnail: grunge },
  industrial: { title: 'Industrial', thumbnail: industrial },
}
