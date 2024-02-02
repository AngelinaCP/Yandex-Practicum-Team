import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userApi } from './userApi'
import { LoginInput } from '@/pages/Login/config'
import { API_URL } from '@/store/api/config'
import { userSlice } from '@/store/features/userSlice'
import {
  GenericResponse,
  IChangePasswordRequest,
  ILogin,
} from '@/store/api/types'
import { RegisterInput } from '@/pages/Signup/config'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    responseHandler: async response => {
      if (
        response.url === `${API_URL}/auth/signin` &&
        response.status === 200
      ) {
        return Promise.resolve()
      } else return response.json()
    },
  }),
  endpoints: builder => ({
    registerUser: builder.mutation<GenericResponse, RegisterInput>({
      query(data) {
        return {
          url: 'auth/signup',
          method: 'POST',
          body: data,
        }
      },
    }),
    loginUser: builder.mutation<ILogin, LoginInput>({
      query(data) {
        return {
          url: 'auth/signin',
          method: 'POST',
          body: data,
          credentials: 'include',
        }
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          await dispatch(userApi.endpoints.getMe.initiate(null))
        } catch (error) {
          console.error(error)
        } finally {
          await dispatch(userApi.endpoints.getMe.initiate(null))
        }
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: 'auth/logout',
          method: 'POST',
          credentials: 'include',
        }
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        await queryFulfilled
        dispatch(userSlice.actions.logout())
      },
    }),
    changePassword: builder.mutation<GenericResponse, IChangePasswordRequest>({
      query(data) {
        return {
          url: `user/password`,
          method: 'PUT',
          body: data,
          credentials: 'include',
        }
      },
    }),
  }),
})

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useChangePasswordMutation,
} = authApi
