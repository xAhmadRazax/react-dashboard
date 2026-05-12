import { TableBody, TableCell, TableRow } from "@/components/ui/table"

import type { CompanyType } from "@/types/dashboard.types"
import { CompanyTableRow } from "./CompanyTableRows"

interface CompanyTableProps {
  companies: CompanyType[]
  currentPage: number
  itemsPerPage: number
}

export const CompanyTableBody = ({
  companies,
  currentPage = 1,
  itemsPerPage,
}: CompanyTableProps) => {
  return (
    <TableBody>
      {companies.length > 0 ? (
        companies.map((row, index: number) => (
          <CompanyTableRow
            key={row.id}
            {...row}
            index={(currentPage - 1) * itemsPerPage + index + 1}
          />
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={6} className="h-32 text-center">
            <div className="text-muted-foreground">No Company found</div>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}
