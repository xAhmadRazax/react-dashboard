import { AddUserMutationOptions } from "@/queries/user.query"
import { useMutation } from "@tanstack/react-query"

export function useAddUser() {
  const {
    mutate: AddUserHandler,
    isPending: isLoading,
    error,
  } = useMutation(AddUserMutationOptions)

  return { AddUserHandler, isLoading, error }
}
