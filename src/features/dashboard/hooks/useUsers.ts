import { getUsersQueryOptions } from "@/queries/user.query"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"

export function useUsers() {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get("page")) || 1

  const setPage = (newPage: number) => {
    setSearchParams({ page: newPage.toString() })
  }
  const { data, isLoading, error, refetch } = useSuspenseQuery(
    getUsersQueryOptions({ page, itemsPerPage: 10 })
  )

  return { data, meta: data?.meta, isLoading, error, page, setPage, refetch }
}
