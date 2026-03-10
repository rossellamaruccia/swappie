export interface UserPostRequest {
  name: string
  surname: string
  email: string
  password: string
  city: string
  image?: string
}
export interface UserResponse {
  id: string
  name: string
  surname: string
  email: string
  password: string
  city: string
  image?: string
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

export interface AuthToken {
  token: string
}