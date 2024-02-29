import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@/store/api/config'
import { ILeaderboard } from '@/store/api/types'

const ratingFieldName = 'silentHillScore'

export const leaderboardApi = createApi({
  reducerPath: 'leaderboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: builder => ({
    updateLeaderboard: builder.mutation({
      query(data) {
        return {
          url: 'leaderboard',
          method: 'POST',
          body: { data, ratingFieldName, teamName: 'silenthill' },
          credentials: 'include',
        }
      },
    }),
    getLeaderboard: builder.query<ILeaderboard[], unknown>({
      query() {
        return {
          url: 'leaderboard/silenthill',
          method: 'POST',
          body: { limit: 20, cursor: 0, ratingFieldName },
          credentials: 'include',
        }
      },
    }),
  }),
})

export const { useUpdateLeaderboardMutation, useGetLeaderboardQuery } =
  leaderboardApi
