import { Link } from "react-router"
import { SidebarLink } from "./SidebarLink"

export const SideBar = () => {
  return (
    <nav className="h-full border-r px-4 pt-4">
      <div className="sticky top-4">
        <Link to={"/"} className="mb-2 block w-fit text-xl font-bold">
          React Dashboard
        </Link>

        <div className="mb-4 h-0.5 w-full bg-zinc-600"></div>

        <ul>
          <li>
            <SidebarLink to="/" label="Dashboard" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
