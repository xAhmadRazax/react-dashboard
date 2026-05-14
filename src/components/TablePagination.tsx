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
  isLoading: boolean
  items: number
  currentItems: number
  currentPage: number
  isFetchingNextPage: boolean
  isFetchingPrevPage: boolean
  resourceName: string
}

export function TablePagination({
  totalPages,
  isLoading,
  items,
  currentItems,
  currentPage,
  isFetchingNextPage,
  isFetchingPrevPage,
  resourceName,
}: TablePaginationProps) {
  const [, setSearchParams] = useSearchParams()
  const queryClient = useQueryClient()

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
        queryKey: [resourceName, currentPage + 1],
        queryFn: () => getUsers({ page: currentPage + 1, itemsPerPage: 10 }),
      })
    }
  }

  // Prefetch previous page
  const prefetchPreviousPage = () => {
    if (currentPage > 1) {
      queryClient.prefetchQuery({
        queryKey: [resourceName, currentPage - 1],
        queryFn: () => getUsers({ page: currentPage - 1, itemsPerPage: 10 }),
      })
    }
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="text-sm text-foreground/80">
        {items > 0
          ? `Showing ${currentItems} of ${items} items`
          : "No items to display"}
      </div>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault()
                handlePrevious()
              }}
              onMouseEnter={prefetchPreviousPage}
              onFocus={prefetchPreviousPage} // ← Add for keyboard
              onTouchStart={prefetchPreviousPage} // ← Add for mobile
              className={
                currentPage === 1 || isLoading || isFetchingPrevPage
                  ? "pointer-events-none opacity-50"
                  : ""
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
              onFocus={prefetchPreviousPage} // ← Add for keyboard
              onTouchStart={prefetchPreviousPage} // ← Add for mobile
              className={
                currentPage === totalPages || isLoading || isFetchingNextPage
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
