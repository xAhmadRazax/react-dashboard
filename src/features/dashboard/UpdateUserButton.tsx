import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UpdateUserForm } from "./UpdateUserForm"
import { useQueryClient } from "@tanstack/react-query"
import { getUser } from "@/lib/api"

export const UpdateUserButton = ({ id }: { id: string }) => {
  const queryClient = useQueryClient()

  const [open, setOpen] = useState(false)

  const prefetchUserData = () => {
    queryClient.prefetchQuery({
      queryKey: ["users", id],
      queryFn: () => getUser(id),
    })
  }

  const onSuccess = () => {
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex justify-end">
        <DialogTrigger
          render={
            <Button
              onMouseEnter={prefetchUserData}
              onFocus={prefetchUserData} // ← Add for keyboard
              onTouchStart={prefetchUserData} // ← Add for mobile
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
