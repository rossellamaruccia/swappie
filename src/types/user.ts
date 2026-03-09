// UserProfile interface matching the API response
export interface UserProfile {
  _id: string
  name: string
  surname: string
  email: string
  password: string
  city: string
  image: string
  createdAt: string
  updatedAt: string
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
