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

export interface LoginResponse{
  accessToken: string
}

export interface User {
  name?: string
  surname?: string
  email: string
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

export enum Category {
  WORK_TOOLS = "WORK_TOOLS",
  HOUSE_MAINTENANCE = "HOUSE_MAINTENANCE",
  DIY = "DIY",
  GARDENING = "GARDENING",
  MUSIC_STUFF = "MUSIC_STUFF",
  PARTY_MATERIAL = "PARTY_MATERIAL",
  COOKING_TOOLS = "COOKING_TOOLS",
  CRAFTING = "CRAFTING",
  WOODWORKING = "WOODWORKING",
  PAINTING = "PAINTING",
}

export enum ItemType {
  BORROW = "BORROW",
  DONATE = "DONATE"
} 

export interface Item {
  title: string
  description: string
  pics?: File[]
  user_id?: UUID | string
  type: ItemType
  category: Category
}

export interface ItemGetResponse extends Item {
  id: number
  pics_urls?: string[]
  lng: number
  lat: number
}
