import { TableHead, TableHeader, TableRow, Table } from "@/components/ui/table"
// import { DashboardTableBody } from "./DashboardTableBody"

export const DashboardTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="max-w-">Email</TableHead>
          <TableHead className="">Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Verified</TableHead>
          <TableHead>Last Login</TableHead>
          <TableHead>Update</TableHead>
          <TableHead>Delete </TableHead>
        </TableRow>
      </TableHeader>
      {/* <DashboardTableBody /> */}
    </Table>
  )
}
