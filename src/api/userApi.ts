import { API_BASE_URL } from "../config/constants"

export async function newUser(data: object) {
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
    const result = await response.json()
    return result
  } catch (error) {
    console.error("Error in POST request:", error)
    throw error
  }
}
