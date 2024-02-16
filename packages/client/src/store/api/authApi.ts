import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userApi } from './userApi'
import { LoginInput } from '@/pages/Login/config'
import { API_URL } from '@/store/api/config'
import { setUser, logout } from '@/store/features/userSlice'
import {
  CodeResponse,
  GenericResponse,
  IChangePasswordRequest,
  IUser,
  OAuthRequest,
  TChangeAvatarRequest,
  errorMessage,
  formValues,
} from '@/store/api/types'
import { RegisterInput } from '@/pages/Signup/config'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    responseHandler: async response => {
      if (
        response.ok &&
        [`${API_URL}/auth/signin`, `${API_URL}/auth/logout`].includes(
          response.url
        )
      ) {
        return Promise.resolve()
      } else {
        return response.json()
      }
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
    OAuthCode: builder.mutation<CodeResponse, { redirect_uri: string }>({
      query(arg) {
        return {
          url: '/oauth/yandex/service-id',
          params: { ...arg },
          method: 'GET',
        }
      },
    }),
    OAuth: builder.mutation<CodeResponse, OAuthRequest>({
      query(data) {
        return {
          url: '/oauth/yandex',
          method: 'POST',
          body: data,
          credentials: 'include',
        }
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(
            userApi.endpoints.getMe.initiate(null, { forceRefetch: true })
          )
        } catch (error) {
          if (
            [
              (error as errorMessage)?.error?.data?.reason,
              (error as errorMessage)?.data?.reason,
            ].includes('User already in system')
          ) {
            dispatch(
              userApi.endpoints.getMe.initiate(null, { forceRefetch: true })
            )
          } else console.error(error)
        }
      },
    }),
    loginUser: builder.mutation<CodeResponse, LoginInput>({
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
          dispatch(
            userApi.endpoints.getMe.initiate(null, { forceRefetch: true })
          )
        } catch (error) {
          if (
            [
              (error as errorMessage)?.error?.data?.reason,
              (error as errorMessage)?.data?.reason,
            ].includes('User already in system')
          ) {
            dispatch(
              userApi.endpoints.getMe.initiate(null, { forceRefetch: true })
            )
          } else console.error(error)
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
        dispatch(logout())
      },
    }),
    changePassword: builder.mutation<
      GenericResponse,
      IChangePasswordRequest | formValues
    >({
      query(data) {
        return {
          url: `user/password`,
          method: 'PUT',
          body: data,
          credentials: 'include',
        }
      },
    }),
    changeAvatar: builder.mutation<IUser, TChangeAvatarRequest>({
      query(data) {
        const formData = new FormData()
        formData.append('avatar', data || '')
        return {
          url: `user/profile/avatar`,
          method: 'PUT',
          body: formData,
          credentials: 'include',
        }
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUser({ ...data }))
        } catch (error) {
          console.error(error)
        }
      },
    }),
    changeProfile: builder.mutation<IUser, IUser | formValues>({
      query(data) {
        return {
          url: `user/profile`,
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
  useChangeAvatarMutation,
  useChangeProfileMutation,
  useOAuthMutation,
  useOAuthCodeMutation,
} = authApi
