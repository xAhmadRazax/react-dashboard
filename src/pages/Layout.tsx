import { Outlet } from "react-router"
import { SideBar } from "@/components/Sidebar"

export const Layout = () => {
  return (
    <div className="grid min-h-screen bg-background md:grid-cols-[250px_1fr]">
      <SideBar />

      <main className="flex w-full flex-col">
        <Outlet />
      </main>
    </div>
  )
}
