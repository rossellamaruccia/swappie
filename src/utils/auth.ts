import { jwtDecode } from "jwt-decode"

interface MyTokenPayload {
  exp: number
  sub: string
}

export const isTokenValid = (token: string | null): boolean => {
    if (!token) {
        return false
    }

  try {
    const decoded = jwtDecode<MyTokenPayload>(token)
    const currentTime = Date.now() / 1000

    return decoded.exp > currentTime
  } catch (error) {
      console.log(error)
    return false
  }
}

export const logout = () => {
        localStorage.setItem("accessToken", "")
        localStorage.setItem("activeUser", "")
}
