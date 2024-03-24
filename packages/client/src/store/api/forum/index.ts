import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TTopic } from './types'

export const forumApi = createApi({
  reducerPath: 'forumApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Forums', 'Topics'],
  endpoints: builder => ({
    getTopics: builder.query<TTopic[], void>({
      query: () => 'topics',
      providesTags: result =>
        result
          ? [
              ...result!.map(
                ({ index }) => ({ type: 'Topics', index } as const)
              ),
              { type: 'Topics', id: 'LIST' },
            ]
          : [{ type: 'Topics', id: 'LIST' }],
    }),
    createTopic: builder.mutation({
      query(body) {
        return {
          url: `topics`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'Topics', id: 'LIST' }],
    }),
    addComment: builder.mutation({
      query({ id, ...body }) {
        return {
          url: `comments/${id}`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'Topics', id: 'LIST' }],
    }),
  }),
})

export const {
  useCreateTopicMutation,
  useGetTopicsQuery,
  useAddCommentMutation,
} = forumApi
