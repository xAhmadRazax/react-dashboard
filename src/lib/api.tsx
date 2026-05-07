import { BASEURL } from "@/constants/constants"
import type { addUserDTO, UserType } from "@/types/dashboard.types"
import type { PaginationMeta } from "@/types/pagination.types"

export const getUsers = async ({
  page = 1,
  itemsPerPage = 10,
  order = "desc",
  sortBy = "id",
}: {
  page?: number
  itemsPerPage?: number
  order?: "asc" | "desc"
  sortBy?: string
} = {}): Promise<{ data: UserType[]; meta: PaginationMeta }> => {
  try {
    const sortString = order === "desc" ? `-${sortBy}` : sortBy

    console.log(sortString)
    const res = await fetch(
      `${BASEURL}?_page=${page}&_per_page=${itemsPerPage}&_sort=${sortString}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }
    const result = await res.json()

    const meta: PaginationMeta = {
      items: result.items,
      next: result.next,
      pages: result.pages,
      prev: result.prev,
    }

    console.log(result)

    return { data: result.data, meta: meta }
  } catch (err: unknown) {
    throw new Error(
      err instanceof Error
        ? `Fetch failed: ${err.message}`
        : "Fetch failed with unknown error"
    )
  }
}

export const getUser = async (id: string): Promise<UserType> => {
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

export const addUser = async (body: addUserDTO) => {
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

export const updateUser = async (id: string, body: Partial<UserType>) => {
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
    console.log(err)
    throw new Error(
      err instanceof Error
        ? `deleting user failed: ${err.message}`
        : "deleting user failed with unknown error"
    )
  }
}
