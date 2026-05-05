import { Link } from "react-router"
import { Dashboard } from "./Dashboard"

export const Layout = () => {
  return (
    <main className="min-h-screen bg-neutral-700">
      <section className="mx-auto max-w-350">
        <header className="py-4 text-center">
          <h1 className="text-2xl text-neutral-50">MOCK DASHBOARD</h1>
        </header>

        <Link
          className="mx-auto mb-2 inline-block rounded bg-green-500 px-2 py-1"
          to={"add-user"}
        >
          Add new User
        </Link>
        <div className="mx-auto -mt-2 h-0.5 w-1/12 bg-neutral-400"></div>
        <Dashboard />
      </section>
    </main>
  )
}
