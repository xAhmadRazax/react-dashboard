import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { AddEmployeeForm } from "./AddEmployeeForm"

export const AddEmployee = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const onSuccess = () => {
    setOpen(false)
    navigate("/")
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex justify-end xl:me-8">
        <DialogTrigger
          render={
            <Button
              variant="default" // ✅ Use theme color
              size="sm" // ✅ Match other buttons
              className="mb-4 gap-1.5"
            />
          }
        >
          <Plus className="size-3.5" />
          Add Employee
        </DialogTrigger>
      </div>
      <DialogContent className="px-6 text-foreground/80">
        <AddEmployeeForm onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  )
}
