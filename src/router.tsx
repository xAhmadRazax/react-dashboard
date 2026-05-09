import { createBrowserRouter } from "react-router"
import { Layout } from "./pages/Layout"
import { Dashboard } from "./pages/Dashboard"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
])
