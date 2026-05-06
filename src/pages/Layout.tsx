import { Outlet } from "react-router"
import { SideBar } from "@/components/Sidebar"

export const Layout = () => {
  return (
    <div className="grid min-h-screen gap-4 bg-zinc-900 md:grid-cols-[250px_1fr]">
      <SideBar />

      <main className="h-full">
        <section className="mx-auto max-w-350">
          <header className="py-4 text-center">
            <h1 className="text-2xl text-zinc-100">MOCK DASHBOARD</h1>
          </header>
          <div className="mx-auto -mt-2 h-1 w-1/12 rounded-full bg-zinc-400"></div>

          <Outlet />
        </section>
      </main>
    </div>
  )
}
