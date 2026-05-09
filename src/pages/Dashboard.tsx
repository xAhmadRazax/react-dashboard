import { TablePagination } from "@/components/TablePagination"
import { AddUser } from "@/features/dashboard/AddUser"
import { DashboardTable } from "@/features/dashboard/DashboardTable"

export const Dashboard = () => {
  return (
    <>
      <section className="mx-auto flex w-full max-w-350 flex-1 flex-col">
        <header className="py-4 text-center">
          <h1 className="text-2xl font-bold text-primary">MOCK DASHBOARD</h1>
        </header>
        <div className="mx-auto -mt-2 h-0.5 w-1/12 rounded-full bg-accent-foreground/30"></div>
        <AddUser />

        <div className="flex-1 overflow-x-auto">
          <DashboardTable />
        </div>
      </section>
    </>
  )
}
