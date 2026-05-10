// components/TablePagination.tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useQueryClient } from "@tanstack/react-query"
import { getUsers } from "@/lib/api"
import { useSearchParams } from "react-router"

interface TablePaginationProps {
  totalPages: number
}

export function TablePagination({ totalPages }: TablePaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const queryClient = useQueryClient()
  const currentPage = Number(searchParams.get("page")) || 1

  const handlePrevious = () => {
    if (currentPage > 1) {
      setSearchParams({ page: (currentPage - 1).toString() })
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: (currentPage + 1).toString() })
    }
  }

  // Prefetch next page
  const prefetchNextPage = () => {
    if (currentPage < totalPages) {
      queryClient.prefetchQuery({
        queryKey: ["users", currentPage + 1],
        queryFn: () => getUsers({ page: currentPage + 1, itemsPerPage: 10 }),
      })
    }
  }

  // Prefetch previous page
  const prefetchPreviousPage = () => {
    if (currentPage > 1) {
      queryClient.prefetchQuery({
        queryKey: ["users", currentPage - 1],
        queryFn: () => getUsers({ page: currentPage - 1, itemsPerPage: 10 }),
      })
    }
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault()
                handlePrevious()
              }}
              onMouseEnter={prefetchPreviousPage}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault()
                handleNext()
              }}
              onMouseEnter={prefetchNextPage}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
