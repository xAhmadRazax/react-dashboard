import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"

export const DeleteUserButton = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const onSuccess = () => {
    setOpen(false)
    navigate("/")
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex justify-end">
        <DialogTrigger render={<Button variant="destructive" size="sm" />}>
          Delete
        </DialogTrigger>
      </div>
      <DialogContent className="px-6 text-foreground/80"></DialogContent>
    </Dialog>
  )
}
