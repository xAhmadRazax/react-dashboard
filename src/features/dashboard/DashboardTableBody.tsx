import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import { getDashboardData } from "@/lib/api"
import type { DashboardRowType } from "@/types/dashboardTypes"
import { useEffect, useState } from "react"
import { DashboardTableRow } from "./DashboardTableRow"

export const DashboardTableBody = () => {
  const [data, setData] = useState<DashboardRowType[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("?????")
        setIsLoading(true)
        const res = await getDashboardData()
        if (res.length > 0) {
          setData(res)
        }
      } catch (error: unknown) {
        setError(
          error instanceof Error ? error?.message : "something went wrong"
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <TableBody>
      {/* handing errors */}
      {error && (
        <TableRow>
          <TableCell colSpan={2} className="py-10 text-center">
            <div className="text-muted-foreground">
              {error ?? "something went wrong"}
            </div>
          </TableCell>
        </TableRow>
      )}

      {/*  handlings loadings */}

      {isLoading && !data && (
        <TableRow>
          <TableCell colSpan={2} className="py-10 text-center">
            <div className="text-muted-foreground">Loading Data ...</div>
          </TableCell>
        </TableRow>
      )}

      {data.length > 0 ? (
        data.map((row) => <DashboardTableRow key={row.id} {...row} />)
      ) : (
        <TableRow>
          <TableCell colSpan={2} className="py-10 text-center">
            <div className="text-muted-foreground">No users found</div>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}
