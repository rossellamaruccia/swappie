import type { UUID } from "crypto"

export interface Geolocation {
  lng: number
  lat: number
}

export interface GeoSearchRequest {
  lng: number
  lat: number
  radiusInMeters: number
}

export interface UserLogin {
  email: string
  password: string
}

export interface User extends UserLogin {
  name?: string
  surname?: string
  city?: string
  profilePic?: string | null
  items?: Item[]
  location?: Geolocation
}

export interface UserGetResponse extends User {
  id: UUID | string
}

export interface UserSignUpRequest extends User {
  password: string
}


export interface Item {
  title: string
  description: string
  pics?: File[]
  user?: UUID | string
  type: string
}

export interface ItemGetResponse extends Item {
  id: number
  pics_urls?: string[]
  lng: number
  lat: number
}
