import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AddUserForm } from "./AddUserForm"
import { useState } from "react"

export const AddUser = () => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="me-8 flex justify-end">
        <DialogTrigger className="mb-4 cursor-pointer rounded-md bg-green-500 px-2 py-1">
          Add new User
        </DialogTrigger>
      </div>
      <DialogContent className="px-6 text-foreground/60">
        <AddUserForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
