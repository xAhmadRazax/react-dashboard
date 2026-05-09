import { TableCell, TableRow } from "@/components/ui/table"
import { UpdateUserButton } from "./UpdateUserButton"
import { DeleteUserButton } from "./DeleteUserButton"

interface DashboardTableRowProps {
  id: string
  name: string
  email: string
  age: number
  isVerified: boolean
  lastLoginAt: string
}

export const DashboardTableRow = ({
  id,
  name,
  email,
  age,
  isVerified,
  lastLoginAt,
}: DashboardTableRowProps) => {
  return (
    <TableRow className="transition-colors hover:bg-muted/40">
      <TableCell className="ps-4 font-medium">{email}</TableCell>

      <TableCell>{name}</TableCell>

      <TableCell>{age}</TableCell>

      <TableCell>
        <span
          className={
            isVerified
              ? "text-green-600 dark:text-green-400"
              : "text-muted-foreground"
          }
        >
          {isVerified ? "Verified" : "Pending"}
        </span>
      </TableCell>

      <TableCell className="text-muted-foreground">{lastLoginAt}</TableCell>

      <TableCell className="pe-4">
        <div className="flex justify-end gap-2">
          <UpdateUserButton id={id} />
          <DeleteUserButton id={id} />
        </div>
      </TableCell>
    </TableRow>
  )
}
