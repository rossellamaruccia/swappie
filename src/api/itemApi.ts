import { API_BASE_URL } from "../config/constants"
import type { Item } from "../types/user"

export async function addNewItem(token: string | null, body: Item) {
  if (!token) {
    console.error("No token provided")
  }

  const formData = new FormData()
  formData.append("title", body.title)
  formData.append("description", body.description)
  if (body.pics)
    body.pics.forEach((file) => {
      formData.append("files", file)
    })

  const response = await fetch(`${API_BASE_URL}/items/add`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || "Operation failed")
  }
  return await response.json()
}

export async function getItemsPerUser(
  token: string | null,
  user_id: string,
): Promise<Item[]> {
  if (!token) {
    console.error("No token provided")
  }

  try {
    const response = await fetch(`${API_BASE_URL}/items?user=${user_id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      const data: Item[] = await response.json()
      console.log("User items:", data)
      return data
    } else throw new Error("Request failed")
  } catch (error) {
    console.error("Network or parsing error:", error)
    throw error
  }
}
