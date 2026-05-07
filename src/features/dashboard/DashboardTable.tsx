import { TableHead, TableHeader, TableRow, Table } from "@/components/ui/table"
import { DashboardTableBody } from "./DashboardTableBody"

export const DashboardTable = () => {
  return (
    <Table>
      <TableHeader className="text-base">
        <TableRow className="bg-primary/20 transition-colors hover:bg-primary/10">
          <TableHead className="w-62.5 ps-4">Email</TableHead>
          <TableHead className="w-37.5">Name</TableHead>
          <TableHead className="w-20">Age</TableHead>
          <TableHead className="w-25">Verified</TableHead>
          <TableHead className="w-25">Last Login</TableHead>
          <TableHead className="w-25">Update</TableHead>
          <TableHead className="w-25 pe-4">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <DashboardTableBody />
    </Table>
  )
}
