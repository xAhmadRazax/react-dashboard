import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { DashboardTableBody } from "./DashboardTableBody"
import { TablePagination } from "@/components/TablePagination"

export const DashboardTable = () => {
  return (
    <>
      <div className="overflow-hidden rounded-sm border bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="border-b bg-muted hover:bg-muted/80">
              <TableHead className="ps-4 font-semibold text-foreground">
                Email
              </TableHead>

              <TableHead className="font-semibold text-foreground">
                Name
              </TableHead>

              <TableHead className="font-semibold text-foreground">
                Age
              </TableHead>

              <TableHead className="font-semibold text-foreground">
                Verified
              </TableHead>

              <TableHead className="font-semibold text-foreground">
                Last Login
              </TableHead>

              <TableHead className="pe-4 text-right font-semibold text-foreground">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <DashboardTableBody />
        </Table>
      </div>
      <div className="mt-4 flex justify-end px-4">
        <TablePagination />
      </div>
    </>
  )
}
