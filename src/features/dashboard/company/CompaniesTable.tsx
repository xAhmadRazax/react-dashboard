import { TablePagination } from "@/components/TablePagination"
import { useIsFetching, useQueryClient } from "@tanstack/react-query"
import { useCompanies } from "./hooks/useCompanies"
import { usePrefetchCompany } from "./hooks/usePrefetchCompany"
import DataTable from "../components/DataTable"
import { CompaniesTableHeader } from "./CompaniesTableHeader"
import { CompanyTableBody } from "./CompanyTableBody"
import { DataTablePaginationWrapper } from "../components/DataTablePaginationWrapper"

export const CompaniesTable = () => {
  const queryClient = useQueryClient()
  const { data, meta, page, isLoading } = useCompanies()
  const companies = data?.data || []

  const isFetching = useIsFetching({
    queryKey: ["companies"],
  })

  usePrefetchCompany(meta.currentPage, meta?.pages || 1)

  const isPrefetchingNextPage = useIsFetching({
    queryKey: [
      "users",
      meta.currentPage + 1 < meta.pages ? meta.currentPage + 1 : meta.pages,
    ],
  })
  const isPrefetchingPrevPage = useIsFetching({
    queryKey: ["users", meta.currentPage - 1 > 1 ? meta.currentPage - 1 : 1],
  })

  return (
    <>
      <DataTable
        isFetching={!!isFetching}
        isLoading={isLoading}
        onRefresh={() =>
          queryClient.invalidateQueries({
            queryKey: ["companies", page || 1],
          })
        }
      >
        <CompaniesTableHeader />
        <DataTable.Body>
          <CompanyTableBody
            companies={companies}
            currentPage={meta.currentPage}
            itemsPerPage={meta.itemsPerPage}
          />
        </DataTable.Body>
      </DataTable>
      {meta && meta.pages > 1 && (
        <DataTablePaginationWrapper>
          <TablePagination
            currentPage={meta.currentPage}
            currentItems={
              (meta.currentPage - 1) * meta.itemsPerPage + companies.length
            }
            items={meta.items}
            isLoading={isLoading}
            resourceName="companies"
            isFetchingNextPage={!!isPrefetchingNextPage}
            isFetchingPrevPage={!!isPrefetchingPrevPage}
            totalPages={meta.pages}
          />
        </DataTablePaginationWrapper>
      )}
    </>
  )
}
