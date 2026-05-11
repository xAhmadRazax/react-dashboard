import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { DashboardTableBody } from "./DashboardTableBody"
import { TablePagination } from "@/components/TablePagination"
import { useUsers } from "./hooks/useUsers"
import { usePrefetchUsers } from "./hooks/usePrefetchUsers"
import { Button } from "@/components/ui/button"
import { RotateCw } from "lucide-react"
import { useIsFetching, useQueryClient } from "@tanstack/react-query"

export const DashboardTable = () => {
  const queryClient = useQueryClient()
  const { data, meta, page, isLoading } = useUsers()
  const users = data?.data || []

  const isFetching = useIsFetching({
    queryKey: ["users"],
  })

  usePrefetchUsers(meta.currentPage, meta?.pages || 1)

  return (
    <>
      <div className="w-full max-w-screen min-w-0 overflow-x-auto rounded-sm border bg-card shadow-sm md:max-w-[calc(100vw-250px)]">
        <Table className="">
          <TableHeader>
            <TableRow className="border-b bg-muted hover:bg-muted/80">
              <TableHead className="min-w-15 ps-4 font-semibold text-foreground">
                No.
              </TableHead>
              <TableHead className="min-w-62.5 font-semibold text-foreground">
                Email
              </TableHead>
              <TableHead className="min-w-37.5 font-semibold text-foreground">
                Name
              </TableHead>
              <TableHead className="min-w-20 font-semibold text-foreground">
                Age
              </TableHead>

              <TableHead className="min-w-20 font-semibold text-foreground">
                Last Login
              </TableHead>
              <TableHead className="text-right font-semibold text-foreground">
                Actions
              </TableHead>
              <TableHead className="text-center font-semibold text-foreground">
                <Button
                  variant="default"
                  className={` ${isFetching || isLoading ? "animate-spin" : ""} rounded-full p-0`}
                  size="icon"
                  onClick={() =>
                    queryClient.invalidateQueries({
                      queryKey: ["users", page || 1],
                    })
                  }
                >
                  <RotateCw className="s-2" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>

          <DashboardTableBody
            currentPage={meta.currentPage || 1}
            users={users}
          />
        </Table>
      </div>
      {meta && meta.pages > 1 && (
        <div className="mt-4 flex justify-end px-4">
          <TablePagination
            currentPage={meta.currentPage}
            currentItems={
              (meta.currentPage - 1) * meta.itemsPerPage + users.length
            }
            items={meta.items}
            isLoading={isLoading}
            totalPages={meta.pages}
          />
        </div>
      )}
    </>
  )
}
