import { TableCell, TableRow } from "@/components/ui/table"
import DataTable from "../components/DataTable"
import { EmployeesTableHeader } from "./EmployeesTableHeader"

interface CompaniesTableSkeletonProps {
  rows: number
}

export const EmployeesTableSkeleton = ({
  rows = 1,
}: CompaniesTableSkeletonProps) => {
  // return (
  //   <div className="w-full max-w-screen min-w-0 overflow-x-auto rounded-sm border bg-card shadow-sm md:max-w-[calc(100vw-250px)]">
  //     <Table>
  //       <TableHeader>
  //         <TableRow className="border-b bg-muted hover:bg-muted/80">
  //           <TableHead className="min-w-15 ps-4 font-semibold text-foreground">
  //             No.
  //           </TableHead>
  //           <TableHead className="min-w-62.5 font-semibold text-foreground">
  //             Email
  //           </TableHead>
  //           <TableHead className="min-w-37.5 font-semibold text-foreground">
  //             Name
  //           </TableHead>
  //           <TableHead className="min-w-20 font-semibold text-foreground">
  //             Age
  //           </TableHead>
  //           <TableHead className="min-w-25 font-semibold text-foreground">
  //             Verified
  //           </TableHead>
  //           <TableHead className="min-w-20 font-semibold text-foreground">
  //             Last Login
  //           </TableHead>
  //           <TableHead className="text-right font-semibold text-foreground">
  //             Actions
  //           </TableHead>
  //           <TableHead className="pe-4 text-right font-semibold text-foreground">
  //             <Button
  //               variant="default"
  //               className={`rounded-full p-0`}
  //               size="icon"
  //             >
  //               <RotateCw className="s-2" />
  //             </Button>
  //           </TableHead>
  //         </TableRow>
  //       </TableHeader>
  //       {/* loading row 1 */}
  //       <TableBody>
  //         {Array.from({ length: rows }).map((_, index) => (
  //           <TableRow
  //             className="h-[44.6px] transition-colors hover:bg-muted/40"
  //             key={index}
  //           >
  //             <TableCell className="animate-pulse bg-primary/40 ps-4 font-medium"></TableCell>

  //             <TableCell className="animate-pulse bg-primary/40"></TableCell>

  //             <TableCell className="animate-pulse bg-primary/40"></TableCell>

  //             <TableCell className="animate-pulse bg-primary/40"></TableCell>

  //             <TableCell className="animate-pulse bg-primary/40"></TableCell>

  //             <TableCell className="animate-pulse bg-primary/40 text-muted-foreground"></TableCell>

  //             <TableCell
  //               className="animate-pulse bg-primary/40 pe-4"
  //               colSpan={2}
  //             >
  //               <div className="flex animate-pulse justify-end gap-2 bg-primary/40"></div>
  //             </TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   </div>
  // )

  return (
    <DataTable>
      <EmployeesTableHeader />
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
