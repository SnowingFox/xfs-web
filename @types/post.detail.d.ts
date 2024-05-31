declare interface IPostDetailResponse {
  id: number
  createAt: string
  body: string
  title: string
  imgs: string[]
  bilibili: any
  favoriteCounts: number
  user: User
  tags: Tag[]
  vote: any
  commentCounts: number
}

interface User {
  id: number
  username: string
  avatar: string
}

interface Tag {
  id: string
  createAt: string
  body: string
  desc: string
  views: number
}
