type Typestamped<T> = T & {
  time: string
}

export type TTopic = Typestamped<{
  topicIndex: number
  title: string
  author: string
  comments: TComment[]
}>

export type TUser = Typestamped<{
  authorIndex: number
  author: string
  authorYandexId: number
}>

export type TComment = Typestamped<{
  author: number
  message: string
}>
