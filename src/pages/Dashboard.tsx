import { TablePagination } from "@/components/tablePagination"
import { AddUser } from "@/features/dashboard/AddUser"
import { DashboardTable } from "@/features/dashboard/DashboardTable"

export const Dashboard = () => {
  return (
    <>
      <section className="mx-auto flex w-full max-w-350 flex-1 flex-col">
        <header className="py-4 text-center">
          <h1 className="text-2xl text-zinc-100">MOCK DASHBOARD</h1>
        </header>
        <div className="mx-auto -mt-2 h-1 w-1/12 rounded-full bg-zinc-400"></div>
        <AddUser />

        <div className="flex-1 overflow-x-auto">
          <DashboardTable />
        </div>
        <div className="flex justify-end">
          <TablePagination />
        </div>
      </section>
    </>
  )
}
