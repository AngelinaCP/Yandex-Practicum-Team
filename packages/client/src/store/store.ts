import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { authApi } from './api/authApi'
import { userApi } from './api/userApi'
import userReducer from './features/userSlice'
import { gameReducer } from '@/game/gameSlice'
import { leaderboardApi } from '@/store/api/leaderboardApi'
import { themeApi } from '@/store/api/themeApi'
import { forumApi } from './api/forum'

const appReducers = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [leaderboardApi.reducerPath]: leaderboardApi.reducer,
  [themeApi.reducerPath]: themeApi.reducer,
  [forumApi.reducerPath]: forumApi.reducer,
  userState: userReducer,
  game: gameReducer,
})

export const createStoreWithInitial = (
  preloadedState: Partial<RootState> = {}
) =>
  configureStore({
    reducer: appReducers,
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({}).concat([
        authApi.middleware,
        userApi.middleware,
        themeApi.middleware,
        leaderboardApi.middleware,
        forumApi.middleware,
      ]),
    preloadedState,
  })

export const store = createStoreWithInitial()

export type RootState = ReturnType<typeof appReducers>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
