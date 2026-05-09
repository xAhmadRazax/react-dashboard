import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UpdateUserForm } from "./UpdateUserForm"

export const UpdateUserButton = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false)

  const onSuccess = () => {
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex justify-end">
        <DialogTrigger
          render={
            <Button
              variant="secondary"
              className="bg-secondary-foreground/10 hover:bg-secondary-foreground/20"
              size="sm"
            />
          }
        >
          Update
        </DialogTrigger>
      </div>
      <DialogContent className="px-6 text-foreground/80">
        <UpdateUserForm userId={id} onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  )
}
