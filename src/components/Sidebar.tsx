// import { Link } from "react-router"
// import { SidebarLink } from "./SidebarLink"

// export const SideBar = () => {
//   return (
//     <nav className="hidden h-full border-r bg-background px-4 pt-4 md:block">
//       <div className="sticky top-4">
//         <Link
//           to={"/"}
//           className="mb-2 block w-fit text-xl font-bold outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
//         >
//           React Dashboard
//         </Link>

//         <div className="h-0.5 w-full rounded-full bg-accent-foreground/30"></div>

//         <ul className="mt-4">
//           <li>
//             <SidebarLink to="/" label="Dashboard" />
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

import { useState } from "react"
import { Link } from "react-router"
import { Menu, X } from "lucide-react"
import { SidebarLink } from "./SidebarLink"

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button - only visible on mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 rounded-md border bg-background p-2 shadow-sm md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile sidebar - slides in from left */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-background px-4 pt-4 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        {/* Close button inside sidebar */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-50 rounded-md p-1 hover:bg-accent"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="sticky top-4">
          <Link
            to={"/"}
            className="mb-2 block w-fit text-xl font-bold outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            onClick={() => setIsOpen(false)}
          >
            React Dashboard
          </Link>

          <div className="h-0.5 w-full rounded-full bg-accent-foreground/30"></div>

          <ul className="mt-4">
            <li>
              <SidebarLink
                to="/"
                label="Dashboard"
                onClick={() => setIsOpen(false)}
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay - darkens background when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Desktop sidebar - always visible on larger screens */}
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
    </>
  )
}
