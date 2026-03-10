import { API_BASE_URL } from "../config/constants"
import type { AuthToken, UserLogin, UserPostRequest, UserResponse } from "../types/user"

export async function newUser(data: UserPostRequest): Promise<UserResponse> {
  try {
    const response = await fetch(API_BASE_URL + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const responseData: UserResponse = await response.json()
    return responseData
  } catch (error) {
    console.error("Error in POST request:", error)
    throw error
  }
}

export async function loginUser(data: UserLogin): Promise<AuthToken> {
  try {
    const response = await fetch(API_BASE_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const responseData: AuthToken = await response.json()
    return responseData
  } catch (error) {
    console.error("Error in POST request:", error)
    throw error
  }
}
