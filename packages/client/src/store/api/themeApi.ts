import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const themeApi = createApi({
  reducerPath: 'themeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: builder => ({
    saveTheme: builder.mutation({
      query(theme) {
        return {
          url: 'theme',
          method: 'PUT',
          body: { theme },
          credentials: 'include',
        }
      },
    }),
  }),
})

export const { useSaveThemeMutation } = themeApi
