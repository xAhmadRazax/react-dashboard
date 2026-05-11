import { createBrowserRouter } from "react-router"
import { Layout } from "./pages/Layout"
import { Dashboard } from "./pages/Dashboard"
import { Company } from "./features/dashboard/company/Company"
import { loader as dashboardLoader } from "./pages/Dashboard"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: "/company",
        element: <Company />,
      },
    ],
  },
])
