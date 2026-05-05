import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { deleteUser } from "@/lib/api"
import { useNavigate } from "react-router"

interface DashboardTableRowProps {
  id: string
  name: string
  email: string
  age: number
  isVerified: boolean
  lastLoginAt: string
}

export const DashboardTableRow = (props: DashboardTableRowProps) => {
  const navigate = useNavigate()
  return (
    <TableRow>
      <TableCell>{props.email}</TableCell>
      <TableCell className="">{props.name}</TableCell>
      <TableCell>{props.age}</TableCell>
      <TableCell>{props.isVerified ? "Yes" : "No"}</TableCell>
      <TableCell>{props.lastLoginAt}</TableCell>
      <TableCell>
        <Button
          onClick={() => navigate(`/update-user/${props.id}`)}
          className=""
        >
          Update
        </Button>
      </TableCell>
      <TableCell>
        <Button onClick={() => deleteUser(props.id)} className="bg-destructive">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  )
}
