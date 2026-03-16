import type { UUID } from "crypto"

export interface UserPostRequest {
  name: string
  surname: string
  email: string
  password: string
  city: string
  image?: string
}

export interface UserState {
  user: User
  isLoading: true
  error: null
}

export interface User {
  id: UUID | string
  name: string
  surname: string
  email: string
  city: string
  profilePic: string | null
  items: Item[]
}

export interface UserResponse {
  id: UUID | string
  name: string
  surname: string
  email: string
  city: string
  profilePic: string | File | null
}

export interface Item {
  title: string
  description: string
  pics: string[] | null
  user: string
}

export interface UpdatedUserProfile {
  name?: string
  surname?: string
  email?: string
  password?: string
  city?: string
  image?: string
}

export interface UpdateProfileImage {
  userId?: UUID
  image?: File
}

export interface UserLogin {
  email: string
  password: string
}