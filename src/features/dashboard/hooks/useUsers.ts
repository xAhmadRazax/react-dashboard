import { getUsersQueryOptions } from "@/queries/user.query"
import { useSuspenseQuery } from "@tanstack/react-query"

export function useUsers() {
  const {
    data,
    error,
    isPending: isLoading,
  } = useSuspenseQuery(getUsersQueryOptions)

  return { data, isLoading, error }
}
