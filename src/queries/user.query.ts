import { addUser, getUsers, getUser, updateUser } from "@/lib/api"
import type { addUserDTO } from "@/types/dashboard.types"
import { mutationOptions, queryOptions } from "@tanstack/react-query"

export const getUsersQueryOptions = queryOptions({
  queryKey: ["users"],
  queryFn: () => getUsers(),
})

export const getUserQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["users", id],
    queryFn: () => getUser(id),
  })

export const createUserMutationOptions = mutationOptions({
  mutationKey: ["users", "create"],
  mutationFn: (user: addUserDTO) => addUser(user),
})

export const updateUserMutationOptions = (id: string) =>
  mutationOptions({
    mutationKey: ["users", "update", id],
    mutationFn: (user: addUserDTO) => updateUser(id, user),
  })
