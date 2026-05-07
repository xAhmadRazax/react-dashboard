import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Suspense } from "react"
import { DashboardTableRow } from "./DashboardTableRow"
import { useUsers } from "./hooks/useUsers"

export const DashboardTableBody = () => {
  const { data } = useUsers()

  const users = data.data || []

  return (
    <TableBody>
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        {users.length > 0 ? (
          users.map((row) => <DashboardTableRow key={row.id} {...row} />)
        ) : (
          <TableRow>
            <TableCell colSpan={7} className="py-10 text-center">
              <div className="text-muted-foreground">No users found</div>
            </TableCell>
          </TableRow>
        )}
      </Suspense>
    </TableBody>
  )
}
