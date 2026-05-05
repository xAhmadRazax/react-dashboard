import { BASEURL } from "@/constants/constants"
import type { DashboardRowType, NewUserType } from "@/types/dashboardTypes"

export const getDashboardData = async (): Promise<DashboardRowType[]> => {
  try {
    const res = await fetch(BASEURL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }
    const result = await res.json()
    return result
  } catch (err: unknown) {
    throw new Error(
      err instanceof Error
        ? `Fetch failed: ${err.message}`
        : "Fetch failed with unknown error"
    )
  }
}

export const getUser = async (id: string): Promise<DashboardRowType> => {
  try {
    const res = await fetch(`${BASEURL}/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }
    const result = await res.json()
    return result
  } catch (err: unknown) {
    throw new Error(
      err instanceof Error
        ? `Fetch failed: ${err.message}`
        : "Fetch failed with unknown error"
    )
  }
}

export const addNewUser = async (body: NewUserType) => {
  try {
    const res = await fetch(BASEURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return res
  } catch (err: unknown) {
    throw new Error(
      err instanceof Error
        ? `creating user failed: ${err.message}`
        : "creating user failed with unknown error"
    )
  }
}

export const updateUser = async (id: string, body: Partial<NewUserType>) => {
  try {
    // remove undefined fields inline
    const cleanBody = Object.fromEntries(
      Object.entries(body).filter(([_, value]) => value !== undefined)
    )

    const res = await fetch(`${BASEURL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleanBody),
    })

    if (!res.ok) {
      throw new Error("Failed to update user")
    }

    return await res.json()
  } catch (err: unknown) {
    throw new Error(
      err instanceof Error
        ? `updating user failed: ${err.message}`
        : "updating user failed with unknown error"
    )
  }
}

export const deleteUser = async (id: string) => {
  try {
    const res = await fetch(`${BASEURL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return res
  } catch (err: unknown) {
    throw new Error(
      err instanceof Error
        ? `deleting user failed: ${err.message}`
        : "deleting user failed with unknown error"
    )
  }
}
