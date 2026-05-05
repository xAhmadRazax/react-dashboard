import { createBrowserRouter } from "react-router"
import { Layout } from "./pages/Layout"
import { AddNewUser } from "./features/dashboard/AddNewUser"
import { UpdateUser } from "./features/dashboard/updateUser"

export const router = createBrowserRouter([
  {
    index: true,
    element: <Layout />,
  },
  {
    path: "/add-user",
    element: <AddNewUser />,
  },
  {
    path: "/update-user/:id",
    element: <UpdateUser />,
  },
])
