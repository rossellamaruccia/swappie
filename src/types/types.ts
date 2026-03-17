import type { UUID } from "crypto"

export interface UserFormState {
  user: User
  isLoading: true
  error: null
}

export interface ItemFormState {
  item: Item
  loading: false
  error: string | null
}

export interface ItemType {
  BORROW: "BORROW"
  DONATE: "DONATE"
}

export interface Geolocation {
  lng: number
  lat: number
}

export interface GeoSearchRequest {
  lng: number
  lat: number
  radiusInMeters: number
}

export interface User {
  id?: UUID | string
  name?: string
  surname?: string
  email?: string
  city?: string
  profilePic?: string | null
  items?: Item[]
  location?: Geolocation
}

export interface UserSignUpRequest {
  name: string
  surname: string
  email: string
  password: string
  city: string
  profilePic?: string
  location?: Geolocation
}

export interface Item {
  title: string
  description: string
  pics?: string[]
  user: UUID | string
  type: ItemType
  location?: Geolocation
  distanceMeters?: number
}

export interface UpdatedUserProfile {
  name?: string
  surname?: string
  email?: string
  password?: string
  city?: string
  image?: string
  profilePic?: string
  location?: Geolocation
}

export interface UserLogin {
  email: string
  password: string
}
