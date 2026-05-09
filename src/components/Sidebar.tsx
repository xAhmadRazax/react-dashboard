import { Link } from "react-router"
import { SidebarLink } from "./SidebarLink"

export const SideBar = () => {
  return (
    <nav className="hidden h-full border-r bg-background px-4 pt-4 md:block">
      <div className="sticky top-4">
        <Link
          to={"/"}
          className="mb-2 block w-fit text-xl font-bold outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          React Dashboard
        </Link>

        <div className="h-0.5 w-full rounded-full bg-accent-foreground/30"></div>

        <ul className="mt-4">
          <li>
            <SidebarLink to="/" label="Dashboard" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
