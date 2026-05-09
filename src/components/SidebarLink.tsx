import { NavLink } from "react-router"

type SidebarLinkProps = {
  to: string
  label: string
}

export const SidebarLink = ({ to, label }: SidebarLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center rounded-sm border px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 ${
          isActive
            ? "border-border bg-card text-primary shadow-sm hover:bg-muted hover:text-foreground"
            : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
        } `
      }
    >
      {label}
    </NavLink>
  )
}
