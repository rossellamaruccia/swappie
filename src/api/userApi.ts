import { API_BASE_URL } from "../config/constants"
import type { UserLogin, UserPostRequest, UserResponse } from "../types/user"

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

interface LoginResponseDTO {
  accessToken: string
}

export async function loggingUser(payload: UserLogin): Promise<string> {
  try {
    const response = await fetch(API_BASE_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })

    const text = await response.text()

    if (response.ok) {
      const data: LoginResponseDTO = JSON.parse(text)
      localStorage.setItem("accessToken", data.accessToken)
      return data.accessToken
    } else {
      try {
        const errorData = JSON.parse(text)
        console.log(
          "Login failed:",
          errorData.message || errorData.error || text,
        )
        throw new Error(errorData.message || errorData.error || "Login failed")
      } catch {
        console.log("Login failed:", text)
        throw new Error(text || "Login failed")
      }
    }
  } catch (error) {
    console.error("Error in POST request:", error)
    throw error
  }
}
