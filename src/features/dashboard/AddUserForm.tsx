import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FormField } from "@/components/form/FormField"
import { SubmitButton } from "@/components/form/SubmitButton"
import { useAddUser } from "./hooks/useAddUser"
import { useQueryClient } from "@tanstack/react-query"

interface AddUserFormProps {
  onSuccess: () => void
}

export const AddUserForm = ({ onSuccess }: AddUserFormProps) => {
  const { AddUserHandler, isLoading, error } = useAddUser()
  const queryClient = useQueryClient()

  const onSubmitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const age = formData.get("age") as string

    AddUserHandler(
      { name, email, age: +age },
      {
        onSuccess: () => {
          // TODO: reinvalidate users query
          queryClient.invalidateQueries({ queryKey: ["users"] })
          onSuccess()
        },
      }
    )

    console.log(error)
  }

  return (
    <>
      <DialogHeader className="text-center">
        <DialogTitle className="mb-2 text-xl">Add New User</DialogTitle>
      </DialogHeader>

      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        {/* field container */}
        <FormField
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
        />
        {/* field container */}
        <FormField label="Name" name="name" placeholder="John Doe" required />
        {/* ifield container */}

        <FormField
          label="Age"
          name="age"
          type="number"
          placeholder="18"
          required
          min={0}
        />
        {/* buttons container */}
        <div className="mt-4 flex justify-end">
          <SubmitButton isLoading={isLoading} children="Add User" />
        </div>
      </form>
    </>
  )
}
