import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { TablePagination } from "@/components/TablePagination"
import { Button } from "@/components/ui/button"
import { RotateCw } from "lucide-react"
import { useIsFetching, useQueryClient } from "@tanstack/react-query"
import { useCompanies } from "./hooks/useCompanies"
import { CompanyTableBody } from "./CompanyTableBody"
import { usePrefetchCompany } from "./hooks/usePrefetchCompany"

export const CompanyTable = () => {
  const queryClient = useQueryClient()
  const { data, meta, page, isLoading } = useCompanies()
  const companies = data?.data || []

  const isFetching = useIsFetching({
    queryKey: ["companies"],
  })

  usePrefetchCompany(meta.currentPage, meta?.pages || 1)

  return (
    <>
      <div className="w-full max-w-screen min-w-0 overflow-x-auto rounded-sm border bg-card shadow-sm md:max-w-[calc(100vw-250px)]">
        <Table className="">
          <TableHeader>
            <TableRow className="border-b bg-muted hover:bg-muted/80">
              <TableHead className="min-w-15 ps-4 font-semibold text-foreground">
                No.
              </TableHead>
              <TableHead className="min-w-20 ps-4 font-semibold text-foreground">
                Logo.
              </TableHead>
              <TableHead className="min-w-62.5 font-semibold text-foreground">
                Email
              </TableHead>
              <TableHead className="min-w-37.5 font-semibold text-foreground">
                Name
              </TableHead>

              <TableHead className="min-w-20 font-semibold text-foreground">
                Address{" "}
              </TableHead>
              <TableHead className="text-right font-semibold text-foreground">
                Actions
              </TableHead>
              <TableHead className="text-center font-semibold text-foreground">
                <Button
                  variant="default"
                  className={` ${isFetching || isLoading ? "animate-spin" : ""} rounded-full p-0`}
                  size="icon"
                  onClick={() =>
                    queryClient.invalidateQueries({
                      queryKey: ["companies", page || 1],
                    })
                  }
                >
                  <RotateCw className="s-2" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>

          <CompanyTableBody
            itemsPerPage={meta?.itemsPerPage || 10}
            currentPage={meta.currentPage || 1}
            companies={companies}
          />
        </Table>
      </div>
      {meta && meta.pages > 1 && (
        <div className="mt-4 flex justify-end px-4">
          <TablePagination
            currentPage={meta.currentPage}
            currentItems={
              (meta.currentPage - 1) * meta.itemsPerPage + companies.length
            }
            items={meta.items}
            isLoading={isLoading}
            totalPages={meta.pages}
          />
        </div>
      )}
    </>
  )
}
