export type User = {
  id: string
  email: string
  name: string
  username: string
  avatarUrl: string
  coverUrl: string
  bio: string
  createdAt: Date
}

export type Skill = {
  id: string
  name: string
  endorsementCount: number
  userId: string
}

export type ProfileView = {
  id: string
  viewedAt: Date
  viewerId?: string | null
  userId: string
}

