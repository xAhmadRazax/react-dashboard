import { NavLink } from "react-router"

interface PropsType {
  to: string
  label: string
}

export const SidebarLink = (props: PropsType) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `block rounded px-2 py-1 text-zinc-300 transition-all hover:bg-zinc-700 ${
          isActive ? "bg-zinc-300 text-zinc-700 hover:text-zinc-200" : ""
        }`
      }
    >
      {props.label}
    </NavLink>
  )
}
