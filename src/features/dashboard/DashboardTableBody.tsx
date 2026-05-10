import { TableBody, TableCell, TableRow } from "@/components/ui/table"

import { DashboardTableRow } from "./DashboardTableRow"
import type { UserType } from "@/types/dashboard.types"

interface DashboardTableProps {
  users: UserType[]
}

export const DashboardTableBody = ({ users }: DashboardTableProps) => {
  return (
    <TableBody>
      {users.length > 0 ? (
        users.map((row) => <DashboardTableRow key={row.id} {...row} />)
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
