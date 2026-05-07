import { createBrowserRouter } from "react-router"
import { Layout } from "./pages/Layout"
import { Dashboard } from "./pages/Dashboard"
import { UpdateUser } from "./features/dashboard/UpdateUserForm"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/update-user/:id",
        element: <UpdateUser />,
      },
    ],
  },
])
