import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setUser } from '../features/userSlice'
import { IUser } from './types'
import { API_URL } from '@/store/api/config'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getMe: builder.query<IUser, null>({
      query() {
        return {
          url: 'auth/user',
          credentials: 'include',
        }
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUser(data))
        } catch (error) {
          console.error(error)
        }
      },
    }),
  }),
})
