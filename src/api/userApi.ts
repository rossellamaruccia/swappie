import { API_BASE_URL } from "../config/constants"
import type { UserLogin, UserPostRequest, UserResponse } from "../types/user"

export async function checkToken(): Promise<string | null> {
  const activeUser = localStorage.getItem("activeUser")
  if (!activeUser) {
    localStorage.setItem("accessToken", "");
    return activeUser
  }
  else return activeUser
}

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
  activeUser: string
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
      localStorage.setItem("activeUser", payload.email)
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

export async function getUserInfo(token: string | null): Promise<UserResponse> {
  if (!token) {
    console.error("No token provided")
  }

  try {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      const data: UserResponse = await response.json()
      return data
    } else throw new Error("Login failed")
  } catch (error) {
    console.error("Network or parsing error:", error)
    throw error
  }
}


export async function modifyUser(token: string | null, payload: UserResponse): Promise<UserResponse> {
   if (!token) {
     console.error("No token provided")
  }
  
  const formData = new FormData()
  formData.append("name", payload.name)
  formData.append("surname", payload.surname)
  formData.append("email", payload.email)
  formData.append("city", payload.city)
  if (payload.profilePic) {
      formData.append("profilePic", payload.profilePic)
    }

   try {
     const response = await fetch(`${API_BASE_URL}/users/me/edit`, {
       method: "PUT",
       headers: {
         Authorization: `Bearer ${token}`,
       },
       body: formData,
     })
     if (response.ok) {
       const data: UserResponse = await response.json()
       return data
     } else throw new Error("Edit failed")
   } catch (error) {
     console.error("Network or parsing error:", error)
     throw error
   }
}
