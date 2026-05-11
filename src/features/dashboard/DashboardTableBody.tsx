import { TableBody, TableCell, TableRow } from "@/components/ui/table"

import { DashboardTableRow } from "./DashboardTableRow"
import type { UserType } from "@/types/dashboard.types"

interface DashboardTableProps {
  users: UserType[]
  currentPage: number
}

export const DashboardTableBody = ({
  users,
  currentPage = 1,
}: DashboardTableProps) => {
  return (
    <TableBody>
      {users.length > 0 ? (
        users.map((row, index: number) => (
          <DashboardTableRow
            key={row.id}
            {...row}
            index={(currentPage - 1) * users.length + index + 1}
          />
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={6} className="h-32 text-center">
            <div className="text-muted-foreground">No users found</div>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}
