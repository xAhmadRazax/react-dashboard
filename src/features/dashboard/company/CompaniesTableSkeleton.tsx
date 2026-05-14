import { TableCell, TableRow } from "@/components/ui/table"
import DataTable from "../components/DataTable"
import { CompaniesTableHeader } from "./CompaniesTableHeader"

interface CompaniesTableSkeletonProps {
  rows: number
}

export const CompaniesTableSkeleton = ({
  rows = 1,
}: CompaniesTableSkeletonProps) => {
  return (
    <DataTable>
      <CompaniesTableHeader />
      <DataTable.Body>
        {Array.from({ length: rows }).map((_, index) => (
          <TableRow
            className="h-[44.6px] transition-colors hover:bg-muted/40"
            key={index}
          >
            <TableCell className="animate-pulse bg-primary/40 ps-4 font-medium"></TableCell>

            <TableCell className="animate-pulse bg-primary/40"></TableCell>

            <TableCell className="animate-pulse bg-primary/40"></TableCell>

            <TableCell className="animate-pulse bg-primary/40"></TableCell>

            <TableCell className="animate-pulse bg-primary/40"></TableCell>

            <TableCell className="animate-pulse bg-primary/40 text-muted-foreground"></TableCell>

            <TableCell className="animate-pulse bg-primary/40 pe-4" colSpan={2}>
              <div className="flex animate-pulse justify-end gap-2 bg-primary/40"></div>
            </TableCell>
          </TableRow>
        ))}
      </DataTable.Body>
    </DataTable>
  )
}
