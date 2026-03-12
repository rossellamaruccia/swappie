export interface UserPostRequest {
  name: string
  surname: string
  email: string
  password: string
  city: string
  image?: string
}

export interface UserState {
  user: UserResponse
  isLoading: true
  error: null
}

export interface UserResponse {
  id: string
  name: string
  surname: string
  email: string
  city: string
  profilePic: string | null
  items: Item[]
}

export interface Item {
  id: string
  title: string
  description: string
  pics: string[]
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
  userId?: string
  image?: File
}

export interface UserLogin {
  email: string
  password: string
}