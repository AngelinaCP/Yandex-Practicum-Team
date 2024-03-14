import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TTopic } from './types'

const SERVER_PORT = import.meta.env.VITE_SERVER_PORT ?? 3001
const BASE_URL = `http://localhost:${SERVER_PORT}/api/`

export const forumApi = createApi({
  reducerPath: 'forumApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Forums', 'Topics'],
  endpoints: builder => ({
    getTopics: builder.query<TTopic[], void>({
      query: () => 'topics',
      providesTags: result =>
        result
          ? [
              ...result.map(
                ({ topicIndex }) => ({ type: 'Topics', topicIndex } as const)
              ),
              { type: 'Topics', id: 'LIST' },
            ]
          : [{ type: 'Topics', id: 'LIST' }],
    }),
    createTopic: builder.mutation<
      void,
      Pick<TTopic, 'title' | 'time' | 'author' | 'comments'>
    >({
      query(body) {
        return {
          url: `topics`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'Topics', id: 'LIST' }],
    }),
  }),
})

export const { useCreateTopicMutation, useGetTopicsQuery } = forumApi
