import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../api/types'
import { RootState } from '@/store/store'

export interface IUserState {
  user: IUser | null
}

const initialState: IUserState = {
  user: null,
}

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
  },
})

export default userSlice.reducer
export const selectUser = (state: RootState) => state.userState.user
export const { logout, setUser } = userSlice.actions
