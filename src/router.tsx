import { createBrowserRouter } from "react-router"
import { Layout } from "./pages/Layout"
import { Employee, loader as employeeLoader } from "./pages/Employee.page"
import { Company } from "./pages/Company.page"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Employee />,
        loader: employeeLoader,
      },
      {
        path: "/companies",
        element: <Company />,
        loader: lo,
      },
    ],
  },
])
