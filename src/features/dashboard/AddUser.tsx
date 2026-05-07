import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AddUserForm } from "./AddUserForm"
import { useState } from "react"
import { useNavigate } from "react-router"

export const AddUser = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const onSuccess = () => {
    setOpen(false)
    navigate("/")
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="me-8 flex justify-end">
        <DialogTrigger className="mb-4 cursor-pointer rounded-md bg-green-600 px-2 py-1 text-primary">
          Add new User
        </DialogTrigger>
      </div>
      <DialogContent className="px-6 text-foreground/80">
        <AddUserForm onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  )
}
