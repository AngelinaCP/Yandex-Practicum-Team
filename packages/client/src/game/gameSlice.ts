import { RootState } from '@/store/store'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  player: 'wizard',
  background: 'forest',
  score: 0,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayer: (state, { payload }) => {
      state.player = payload
    },
    setBackground: (state, { payload }) => {
      state.background = payload
    },
    setScore: (state, { payload }) => {
      state.score = payload
    },
  },
})

export const gameSelector = (store: RootState) => store.game
export const playerSelector = (store: RootState) => gameSelector(store).player
export const backgroundSelector = (store: RootState) =>
  gameSelector(store).background
export const scoreSelector = (store: RootState) => gameSelector(store).score
export const gameReducer = gameSlice.reducer
export const { setPlayer, setBackground, setScore } = gameSlice.actions
