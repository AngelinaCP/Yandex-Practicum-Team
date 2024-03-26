type Typestamped<T> = T & {
  time: string
}

export type TTopic = Typestamped<{
  index: number
  title: string
  description: string
  author: string
  Comments: TComment[]
}>

export type TUser = Typestamped<{
  authorIndex: number
  author: string
  authorYandexId: number
}>

export type TComment = Typestamped<{
  author: number
  message: string
  createdAt: string
}>
