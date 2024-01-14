const standard = {
  backgroundColor: '#fff',
  buttonBackground: '#F3EEEE',
  buttonColor: '#000',
  primaryBackground: '#001A2E',
  primaryColor: '#fff',
  color: '#000',
  primaryBackground95: '#001A2ECC',
  darkBlue: '#001A2E',
  darkBlue95: '#001A2ECC',
  black: '#000',
  white: '#fff',
  arrowFill: '#D9D9D9',
}

const dark = {
  ...standard,
  backgroundColor: '#090717',
  primaryBackground: '#3B5AFF',
  color: '#fff',
}

export default {
  dark,
  ...standard,
}

/*

import * as stylex from '@stylexjs/stylex'

const DARK = '@media (prefers-color-scheme: dark)'

export const colors = stylex.defineVars({
  backgroundColor: { default: '#fff', [DARK]: '#090717' },
  primaryBackground: { default: '#001A2E', [DARK]: '#3B5AFF' },
  color: { default: '#000', [DARK]: 'fff' },
  buttonBackground: '#F3EEEE',
  buttonColor: '#000',
  primaryColor: '#fff',
  primaryBackground95: '#001A2ECC',
  darkBlue: '#001A2E',
  darkBlue95: '#001A2ECC',
  black: '#000',
  white: '#fff',
  arrowFill: '#D9D9D9',
})

*/
