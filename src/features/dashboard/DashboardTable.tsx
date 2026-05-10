import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { DashboardTableBody } from "./DashboardTableBody"
import { TablePagination } from "@/components/TablePagination"
import { useUsers } from "./hooks/useUsers"
import { usePrefetchUsers } from "./hooks/usePrefetchUsers"

export const DashboardTable = () => {
  const { data, meta, page } = useUsers()
  const users = data?.data || []

  usePrefetchUsers(page, meta?.pages || 1)

  return (
    <>
      <div className="w-full max-w-screen min-w-0 overflow-x-auto rounded-sm border bg-card shadow-sm md:max-w-[calc(100vw-250px)]">
        <Table className="">
          <TableHeader>
            <TableRow className="border-b bg-muted hover:bg-muted/80">
              <TableHead className="min-w-62.5 ps-4 font-semibold text-foreground">
                Email
              </TableHead>
              <TableHead className="min-w-37.5 font-semibold text-foreground">
                Name
              </TableHead>
              <TableHead className="min-w-20 font-semibold text-foreground">
                Age
              </TableHead>
              <TableHead className="min-w-25 font-semibold text-foreground">
                Verified
              </TableHead>
              <TableHead className="min-w-20 font-semibold text-foreground">
                Last Login
              </TableHead>
              <TableHead className="pe-4 text-right font-semibold text-foreground">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <DashboardTableBody users={users} />
        </Table>
      </div>
      {meta && meta.pages > 1 && (
        <div className="mt-4 flex justify-end px-4">
          <TablePagination totalPages={meta.pages} />
        </div>
      )}
    </>
  )
}
