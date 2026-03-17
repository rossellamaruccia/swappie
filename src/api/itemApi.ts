import { API_BASE_URL } from "../config/constants"
import type { Item } from "../types/types"

export async function addNewItem(token: string | null, body: Item) {
  if (!token) {
    console.error("No token provided")
  }

  const formData = new FormData()
  formData.append("title", body.title)
  formData.append("description", body.description)
  body.pics!.forEach((file) => {
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
    const errorData = await response.json().catch(() => ({
      //login failed - redirect on loginpage
    }))
    throw new Error(errorData.message || "Operation failed")
  }
  return await response.json()
}

export async function getItemsPerUser(token: string | null): Promise<Item[]> {
  const response = await fetch(`${API_BASE_URL}/items`, {
    headers: {
      Authorization : `Bearer ${token}`,
    }
  })
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      //login failed - redirect on loginpage
    }))
    throw new Error(errorData.message || "Operation failed")
  }
  const itemsData: Item[] = await response.json()
  return itemsData;
}
