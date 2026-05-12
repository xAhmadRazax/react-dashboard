// hooks/usePrefetchUsers.ts
import { useEffect } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { getCompanies } from "@/lib/api"

export const usePrefetchCompany = (currentPage: number, totalPages: number) => {
  const queryClient = useQueryClient()

  useEffect(() => {
    // Prefetch next page
    if (currentPage < totalPages) {
      queryClient.prefetchQuery({
        queryKey: ["company", currentPage + 1],
        queryFn: () =>
          getCompanies({ page: currentPage + 1, itemsPerPage: 10 }),
      })
    }

    // Prefetch previous page
    if (currentPage > 1) {
      queryClient.prefetchQuery({
        queryKey: ["company", currentPage - 1],
        queryFn: () =>
          getCompanies({ page: currentPage - 1, itemsPerPage: 10 }),
      })
    }
  }, [currentPage, totalPages, queryClient])
}
