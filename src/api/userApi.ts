import { API_BASE_URL } from "../config/constants"
import type {
  UserLogin,
  User,
  UserSignUpRequest,
  UpdatedUserProfile,
  Geolocation,
} from "../types/types"

const activeUser = localStorage.getItem("activeUser")

export async function checkToken(): Promise<string | null> {
  if (!activeUser) {
    localStorage.setItem("accessToken", "")
    return activeUser
  } else return activeUser
}

export async function getLocation(): Promise<Geolocation> {
  try {
  const location: Geolocation = {
    lng: 0.0,
    lat: 0.0,
  }
    if (!navigator.geolocation) {
      throw new Error("Could not get your coords.")
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        location.lat = position.coords.latitude
        location.lng = position.coords.longitude
      })
      console.log(location)
      return location
    }
  } catch (error) {
    console.error("Error in POST request:", error)
    throw error
  }
}

export async function updateUserLocation(token: string, location: Location): Promise<User> {
  try {
    const response = await fetch(API_BASE_URL + "/locate", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(location),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const responseData: User = await response.json()
    return responseData
  } catch (error) {
    console.error("Error in POST request:", error)
    throw error
  }
}

export async function newUser(data: UserSignUpRequest) {
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
    return response.ok
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

export async function getUserInfo(token: string | null): Promise<User> {
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
      const data: User = await response.json()
      return data
    } else throw new Error("Login failed")
  } catch (error) {
    console.error("Network or parsing error:", error)
    throw error
  }
}

export async function modifyUser(
  token: string | null,
  payload: UpdatedUserProfile,
): Promise<User> {
  if (!token) {
    console.error("No token provided")
  }

  const formData = new FormData()
  formData.append("name", payload.name!)
  formData.append("surname", payload.surname!)
  formData.append("email", payload.email!)
  formData.append("city", payload.city!)
  formData.append("profilePic", payload.profilePic!)

  try {
    const response = await fetch(`${API_BASE_URL}/users/me/edit`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
    if (response.ok) {
      const data: User = await response.json()
      return data
    } else throw new Error("Edit failed")
  } catch (error) {
    console.error("Network or parsing error:", error)
    throw error
  }
}
