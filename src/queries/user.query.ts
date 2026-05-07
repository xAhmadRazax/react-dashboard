import { addUser, getUsers } from "@/lib/api"
import type { addUserDTO } from "@/types/dashboard.types"
import { mutationOptions, queryOptions } from "@tanstack/react-query"

export const AddUserMutationOptions = mutationOptions({
  mutationKey: ["add-user"],
  mutationFn: (user: addUserDTO) => addUser(user),
})
export const getUsersQueryOptions = queryOptions({
  queryKey: ["users"],
  queryFn: () => getUsers(),
})
